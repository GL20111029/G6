((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/option.en.md'],
{ "docs/manual/graph/option.en.md": function (module, exports, __mako_require__){
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
                    id: "autofit",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#autofit",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 55
                        }, this),
                        "autoFit",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "autoFit",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 157
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[0].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#fitviewoptions",
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1497
                                }, this),
                                $$contentTexts[2].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#viewportanimationeffecttiming",
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1581
                                }, this),
                                $$contentTexts[4].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#viewportanimationeffecttiming",
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1680
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 1468
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 1465
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 1453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[7].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 1829
                        }, this),
                        $$contentTexts[9].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 1896
                        }, this),
                        $$contentTexts[11].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[12].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 1961
                        }, this),
                        $$contentTexts[13].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 1801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 2030
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2071
                                }, this),
                                $$contentTexts[16].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 2067
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2145
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 2141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 2063
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[19].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 2220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[20].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 2253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "fitviewoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fitviewoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 2405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 2346
                        }, this),
                        "FitViewOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "FitViewOptions",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2819
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2688
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 2614
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 2462
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 2322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3783
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3818
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3853
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3888
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3923
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 3779
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 3772
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 3982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4047
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4079
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4144
                                                }, this),
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4176
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4250
                                                }, this),
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4315
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 4363
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3978
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4487
                                                }, this),
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4519
                                                }, this),
                                                $$contentTexts[42].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4584
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4616
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4681
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4713
                                                }, this),
                                                $$contentTexts[48].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4787
                                                }, this),
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4852
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4917
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 4965
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5009
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4418
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 3971
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 3765
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "viewportanimationeffecttiming",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#viewportanimationeffecttiming",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 5149
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 5075
                        }, this),
                        "ViewportAnimationEffectTiming",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ViewportAnimationEffectTiming",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5593
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5462
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 5388
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 5221
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 5036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[55].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 6539
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "autoresize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#autoresize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 6683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 6628
                        }, this),
                        "autoResize",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "autoResize",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7089
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6958
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 6884
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 6736
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 6608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[56].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 8050
                            }, this),
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 8111
                            }, this),
                            $$contentTexts[59].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 8180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 8047
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 8035
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 8236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[62].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 8298
                        }, this),
                        $$contentTexts[64].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 8269
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "background",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#background",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 8442
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 8387
                        }, this),
                        "background",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "background",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8848
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8717
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 8643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 8495
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 8367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 9809
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 9806
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 9794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 9861
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 9894
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "canvas",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#canvas",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 9994
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 9943
                        }, this),
                        "canvas",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "canvas",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10392
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10261
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 10187
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 10043
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 9927
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#canvasconfig",
                            children: $$contentTexts[68].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11353
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 11350
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 11338
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[69].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11457
                        }, this),
                        $$contentTexts[71].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11522
                        }, this),
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11587
                        }, this),
                        $$contentTexts[75].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11652
                        }, this),
                        $$contentTexts[77].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11717
                        }, this),
                        $$contentTexts[79].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11782
                        }, this),
                        $$contentTexts[81].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 11428
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "canvasconfig",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#canvasconfig",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 11930
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11873
                        }, this),
                        "CanvasConfig",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "CanvasConfig",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12340
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12209
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 12135
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 11985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 11851
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13304
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13339
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13374
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[85].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13409
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[86].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13444
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 13300
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 13293
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13643
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13499
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13798
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13654
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13883
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13953
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13809
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14111
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13964
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[104].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[105].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14287
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14323
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14122
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14338
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14410
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14482
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14334
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[113].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#renderer",
                                                    children: $$contentTexts[114].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14564
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[115].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[116].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14655
                                                }, this),
                                                $$contentTexts[117].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[118].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14722
                                                }, this),
                                                $$contentTexts[119].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14789
                                                }, this),
                                                $$contentTexts[121].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[122].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14856
                                                }, this),
                                                $$contentTexts[123].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14964
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14493
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14979
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15123
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14975
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 13492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 13286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "container",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#container",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 15223
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 15169
                        }, this),
                        "container",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "container",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15627
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15496
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 15422
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 15275
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 15150
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[129].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 16588
                            }, this),
                            $$contentTexts[130].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[131].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 16651
                            }, this),
                            $$contentTexts[132].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[133].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 16714
                            }, this),
                            $$contentTexts[134].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 16585
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 16573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 16794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[136].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[137].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16863
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 16832
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[138].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[139].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16939
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 16908
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[140].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[141].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17015
                                }, this),
                                $$contentTexts[142].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[143].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17082
                                }, this),
                                $$contentTexts[144].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#canvasconfig",
                                    children: $$contentTexts[145].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17149
                                }, this),
                                $$contentTexts[146].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 16984
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 16828
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "cursor",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cursor",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 17312
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 17261
                        }, this),
                        "cursor",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "cursor",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17710
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17579
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 17505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 17361
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 17245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[147].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 18668
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 18656
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[148].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 18715
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[149].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 18779
                        }, this),
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 18846
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 18913
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 18980
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19047
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19114
                        }, this),
                        $$contentTexts[161].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19181
                        }, this),
                        $$contentTexts[163].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[164].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19248
                        }, this),
                        $$contentTexts[165].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[166].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19315
                        }, this),
                        $$contentTexts[167].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[168].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19382
                        }, this),
                        $$contentTexts[169].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[170].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19449
                        }, this),
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19516
                        }, this),
                        $$contentTexts[173].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19583
                        }, this),
                        $$contentTexts[175].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[176].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19650
                        }, this),
                        $$contentTexts[177].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19717
                        }, this),
                        $$contentTexts[179].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19784
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19851
                        }, this),
                        $$contentTexts[183].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19918
                        }, this),
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 19985
                        }, this),
                        $$contentTexts[187].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[188].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20052
                        }, this),
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20119
                        }, this),
                        $$contentTexts[191].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[192].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20186
                        }, this),
                        $$contentTexts[193].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[194].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20253
                        }, this),
                        $$contentTexts[195].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[196].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20320
                        }, this),
                        $$contentTexts[197].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[198].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20387
                        }, this),
                        $$contentTexts[199].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[200].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20454
                        }, this),
                        $$contentTexts[201].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[202].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20521
                        }, this),
                        $$contentTexts[203].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20588
                        }, this),
                        $$contentTexts[205].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20655
                        }, this),
                        $$contentTexts[207].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[208].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20722
                        }, this),
                        $$contentTexts[209].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[210].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20789
                        }, this),
                        $$contentTexts[211].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[212].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20856
                        }, this),
                        $$contentTexts[213].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[214].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20923
                        }, this),
                        $$contentTexts[215].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[216].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 20990
                        }, this),
                        $$contentTexts[217].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[218].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 21057
                        }, this),
                        $$contentTexts[219].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 18749
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[220].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
                            children: $$contentTexts[221].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 21158
                        }, this),
                        $$contentTexts[222].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 21128
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "devicepixelratio",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#devicepixelratio",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 21373
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 21312
                        }, this),
                        "devicePixelRatio",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "devicePixelRatio",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21791
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21660
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 21586
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 21432
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 21286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[223].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 22752
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 22749
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 22737
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[224].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 22805
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[225].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",
                            children: $$contentTexts[226].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 22869
                        }, this),
                        $$contentTexts[227].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 22839
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "width",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#width",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 23079
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 23029
                        }, this),
                        "width",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "width",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23475
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23344
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 23270
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 23127
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 23014
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[228].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 24436
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 24433
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 24421
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 24489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "height",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#height",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 24590
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 24539
                        }, this),
                        "height",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "height",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24988
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24857
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 24783
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 24639
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 24523
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[230].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 25949
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 25946
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 25934
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[231].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 26002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "renderer",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#renderer",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 26107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 26054
                        }, this),
                        "renderer",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "renderer",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26509
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26378
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 26304
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 26158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 26036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[232].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 27470
                            }, this),
                            $$contentTexts[233].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[234].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 27533
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 27467
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 27455
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[235].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 27586
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[236].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[237].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 27650
                        }, this),
                        $$contentTexts[238].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[239].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 27717
                        }, this),
                        $$contentTexts[240].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[241].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 27784
                        }, this),
                        $$contentTexts[242].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[243].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 27851
                        }, this),
                        $$contentTexts[244].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 27620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[245].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 27925
                        }, this),
                        $$contentTexts[246].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 27922
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[247].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 28000
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "padding",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#padding",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 28139
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 28087
                        }, this),
                        "padding",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "padding",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28539
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28408
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 28334
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 28189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 28070
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[248].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 29500
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 29497
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29485
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[249].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29553
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[250].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[251].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 29624
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29621
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[252].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "rotation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#rotation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 29813
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 29760
                        }, this),
                        "rotation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "rotation",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30215
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30084
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 30010
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 29864
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 29742
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[253].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 31176
                            }, this),
                            $$contentTexts[254].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[255].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 31239
                            }, this),
                            $$contentTexts[256].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[257].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 31310
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 31173
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 31161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[258].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 31367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "x",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#x",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 31458
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 31412
                        }, this),
                        "x",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "x",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31846
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31715
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 31641
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 31502
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 31401
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[259].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 32807
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 32804
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 32792
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[260].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 32860
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "y",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#y",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 32951
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 32905
                        }, this),
                        "y",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "y",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33339
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33208
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 33134
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 32995
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 32894
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[261].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 34300
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 34297
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 34285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[262].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 34353
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "zoom",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#zoom",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 34450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 34401
                        }, this),
                        "zoom",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "zoom",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 34844
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34713
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 34639
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 34497
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 34387
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[263].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 35805
                            }, this),
                            $$contentTexts[264].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[265].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 35868
                            }, this),
                            $$contentTexts[266].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[267].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 35939
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 35802
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 35790
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[268].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 35996
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "zoomrange",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#zoomrange",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 36103
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 36049
                        }, this),
                        "zoomRange",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "zoomRange",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 36302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 36155
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 36030
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[269].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 37468
                            }, this),
                            $$contentTexts[270].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[271].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 37531
                            }, this),
                            $$contentTexts[272].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[273].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 37602
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 37465
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 37453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[274].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 37659
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
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 37766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 37712
                        }, this),
                        "animation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "animation",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38170
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38039
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 37965
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 37818
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 37693
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[275].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#animationeffecttiming",
                                    children: $$contentTexts[276].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39162
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 39131
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 39128
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 39116
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[277].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 39252
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[278].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 39286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "animationeffecttiming",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#animationeffecttiming",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 39417
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 39351
                        }, this),
                        "AnimationEffectTiming",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "AnimationEffectTiming",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39845
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39714
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 39640
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 39481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 39320
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[279].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[280].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40845
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[281].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40881
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[282].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40917
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[283].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40953
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 40805
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 40798
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[284].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[285].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[286].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[287].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[288].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[289].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[290].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41248
                                                }, this),
                                                $$contentTexts[291].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[292].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41315
                                                }, this),
                                                $$contentTexts[293].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[294].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41382
                                                }, this),
                                                $$contentTexts[295].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[296].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41449
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[297].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 41498
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41543
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41168
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[298].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[299].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[300].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[301].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41666
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41702
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41554
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[302].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[303].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[304].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[305].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41861
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41713
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[306].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[307].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[308].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41952
                                                }, this),
                                                $$contentTexts[309].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[310].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42019
                                                }, this),
                                                $$contentTexts[311].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[312].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42086
                                                }, this),
                                                $$contentTexts[313].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[314].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42153
                                                }, this),
                                                $$contentTexts[315].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[316].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42220
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[317].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 42269
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42314
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41872
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[318].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42329
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[319].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[320].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[321].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42473
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42325
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 41002
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 40791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[322].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 42503
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 42500
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[323].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 42551
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "data",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#data",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 42684
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 42635
                        }, this),
                        "data",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "data",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 43078
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42947
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 42873
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 42731
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 42621
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#graphdata",
                            children: $$contentTexts[324].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 44039
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 44036
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 44024
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[325].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 44112
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "graphdata",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphdata",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 44219
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 44165
                        }, this),
                        "GraphData",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "GraphData",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44623
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44492
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 44418
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 44271
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 44146
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[326].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45587
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[327].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45623
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[328].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45659
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[329].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45695
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[330].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45731
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 45583
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 45576
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[331].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[332].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#nodedata",
                                                    children: $$contentTexts[333].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45867
                                                }, this),
                                                $$contentTexts[334].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[335].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[336].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45990
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45787
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[337].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[338].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#edgedata",
                                                    children: $$contentTexts[339].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46111
                                                }, this),
                                                $$contentTexts[340].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[341].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46198
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[342].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46234
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46031
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[343].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[344].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#combodata",
                                                    children: $$contentTexts[345].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46355
                                                }, this),
                                                $$contentTexts[346].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[347].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[348].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46479
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46275
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 45780
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 45569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "nodedata",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodedata",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 46607
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 46554
                        }, this),
                        "NodeData",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "NodeData",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47009
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46878
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 46804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 46658
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 46536
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[349].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47973
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[350].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48009
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[351].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48045
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[352].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48081
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[353].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48117
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 47969
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 47962
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[354].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[355].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[356].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[357].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[358].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48173
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[359].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[360].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48402
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[361].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48438
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[362].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48510
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48362
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[363].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48525
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[364].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[365].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48669
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48521
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[367].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[370].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48828
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48680
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48843
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[373].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48915
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48987
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48839
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[375].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49002
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[376].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[377].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[378].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49146
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48998
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[379].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49305
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 48166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 47955
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "edgedata",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edgedata",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 49403
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 49350
                        }, this),
                        "EdgeData",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "EdgeData",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 49805
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49674
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 49600
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 49454
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 49332
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[383].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50769
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[384].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50805
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[385].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50841
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[386].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50877
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[387].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50913
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 50765
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 50758
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[388].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[389].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[390].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[391].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51081
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50969
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[394].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51198
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[395].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[396].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[397].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51306
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51158
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[400].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[401].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51459
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51495
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51347
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[402].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[403].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[404].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[405].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51618
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51654
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51506
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[406].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51669
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[408].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[409].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51813
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51665
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[410].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[411].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[412].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[413].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51972
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51824
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[414].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[415].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[416].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52131
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51983
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 50962
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 50751
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "combodata",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#combodata",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 52231
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 52177
                        }, this),
                        "ComboData",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ComboData",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 52635
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52504
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 52430
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 52283
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 52158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[418].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53599
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[419].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53635
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[420].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53671
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[421].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53707
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[422].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53743
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 53595
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 53588
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[423].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53803
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[424].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[425].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[426].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[427].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53947
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53799
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[430].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53988
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[432].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[433].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[434].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[435].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54295
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54147
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[436].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[437].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[438].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[439].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54454
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54306
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54469
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[441].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54613
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54465
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[446].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54736
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54624
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 53792
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 53581
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[448].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 54802
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 54799
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[449].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 54850
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            $$contentTexts[450].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/data",
                                children: $$contentTexts[451].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 54955
                            }, this),
                            $$contentTexts[452].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 54924
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 54920
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "node",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 55116
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 55067
                        }, this),
                        "node",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "node",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 55510
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55379
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 55305
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 55163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 55053
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#nodeoptions",
                            children: $$contentTexts[453].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 56471
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 56468
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 56456
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[454].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 56546
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "nodeoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodeoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 56657
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 56601
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 57065
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56934
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 56860
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 56711
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 56580
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[455].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58029
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[456].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58065
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[457].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58101
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[458].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58137
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[459].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58173
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 58025
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 58018
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[461].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/node/base-node#type",
                                                children: $$contentTexts[462].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58309
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[463].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58402
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58447
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58229
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[464].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[465].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/node/base-node#style",
                                                children: $$contentTexts[466].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58538
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[467].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58664
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58458
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/node/base-node#state",
                                                children: $$contentTexts[470].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58755
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[471].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58881
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58675
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[472].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58896
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[473].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/node/base-node#palette",
                                                children: $$contentTexts[474].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58972
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58892
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/node/base-node#animation",
                                                children: $$contentTexts[478].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59191
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[479].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59111
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 58222
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 58011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[480].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/element/node/base-node",
                            children: $$contentTexts[481].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 59378
                        }, this),
                        $$contentTexts[482].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 59348
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[483].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 59491
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 59488
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[484].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 59539
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "edge",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edge",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 59672
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 59623
                        }, this),
                        "edge",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "edge",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 60066
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59935
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 59861
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 59719
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 59609
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#edgeoptions",
                            children: $$contentTexts[485].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 61027
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 61024
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 61012
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[486].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 61102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "edgeoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edgeoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 61213
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 61157
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 61621
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61490
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 61416
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 61267
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 61136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[487].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62585
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[488].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62621
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[489].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62657
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[490].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62693
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[491].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62729
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 62581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 62574
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/edge/base-edge#type",
                                                children: $$contentTexts[494].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 62865
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[495].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 62958
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63003
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62785
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/edge/base-edge#style",
                                                children: $$contentTexts[498].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 63094
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63220
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[500].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/edge/base-edge#state",
                                                children: $$contentTexts[502].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 63311
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[503].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63437
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63231
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[505].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/edge/base-edge#palette",
                                                children: $$contentTexts[506].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 63528
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63620
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63656
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63448
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/edge/base-edge#animation",
                                                children: $$contentTexts[510].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 63747
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[511].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63877
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63667
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 62778
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 62567
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[512].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/element/edge/base-edge",
                            children: $$contentTexts[513].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 63934
                        }, this),
                        $$contentTexts[514].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 63904
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[515].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 64047
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 64044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[516].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 64095
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "combo",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#combo",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 64230
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 64180
                        }, this),
                        "combo",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "combo",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 64626
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64495
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 64421
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 64278
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 64165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#combooptions",
                            children: $$contentTexts[517].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 65587
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 65584
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 65572
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[518].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 65663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[519].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65715
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[520].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65751
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[521].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65787
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[522].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65823
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[523].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65859
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 65711
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 65704
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[524].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65919
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65955
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/combo/base-combo#type",
                                                children: $$contentTexts[526].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 65995
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65991
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[527].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66090
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65915
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[528].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66150
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[529].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/combo/base-combo#style",
                                                children: $$contentTexts[530].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66226
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[531].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66318
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66354
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66146
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[532].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[533].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/combo/base-combo#state",
                                                children: $$contentTexts[534].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66445
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[535].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66573
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66365
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[536].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[537].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/combo/base-combo#palette",
                                                children: $$contentTexts[538].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66664
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[539].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66758
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66794
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66584
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[540].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[541].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/en/manual/element/combo/base-combo#animation",
                                                children: $$contentTexts[542].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66885
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[543].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67017
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66805
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 65908
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 65697
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[544].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/element/combo/base-combo",
                            children: $$contentTexts[545].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 67074
                        }, this),
                        $$contentTexts[546].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 67044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[547].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 67189
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 67186
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[548].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 67237
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 67374
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 67323
                        }, this),
                        "layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "layout",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67772
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67641
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 67567
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 67423
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 67307
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[549].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 68733
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 68730
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 68718
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[550].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 68786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[551].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 68823
                        }, this),
                        $$contentTexts[552].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 68820
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[553].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 68898
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "theme",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#theme",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 69033
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 68983
                        }, this),
                        "theme",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "theme",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 69429
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69298
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 69224
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 69081
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 68968
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[554].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70390
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 70387
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 70375
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[555].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[556].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70473
                        }, this),
                        $$contentTexts[557].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[558].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70540
                        }, this),
                        $$contentTexts[559].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[560].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70607
                        }, this),
                        $$contentTexts[561].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 70443
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "behaviors",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#behaviors",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 70751
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70697
                        }, this),
                        "behaviors",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "behaviors",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 71155
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 71024
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 70950
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 70803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 70678
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[562].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[563].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72147
                                }, this),
                                $$contentTexts[564].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 72116
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 72113
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72101
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[565].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72265
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[566].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 72302
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[567].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72350
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[568].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/behavior/overview",
                                    children: $$contentTexts[569].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72455
                                }, this),
                                $$contentTexts[570].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 72424
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[571].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/behavior/auto-adapt-label",
                                    children: $$contentTexts[572].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72592
                                }, this),
                                $$contentTexts[573].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 72561
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72420
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "plugins",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#plugins",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 72780
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 72728
                        }, this),
                        "plugins",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "plugins",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 73180
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 73049
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 72975
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 72830
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 72711
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[574].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[575].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74172
                                }, this),
                                $$contentTexts[576].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 74141
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 74138
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74126
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[577].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74290
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[578].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 74327
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74324
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[579].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74375
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[580].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/plugin/overview",
                                    children: $$contentTexts[581].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74480
                                }, this),
                                $$contentTexts[582].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 74449
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[583].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/plugin/background",
                                    children: $$contentTexts[584].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74615
                                }, this),
                                $$contentTexts[585].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 74584
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74445
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "transforms",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#transforms",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 74801
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 74746
                        }, this),
                        "transforms",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "transforms",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 75207
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 75076
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 75002
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 74854
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 74726
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[586].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[587].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 76199
                                }, this),
                                $$contentTexts[588].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 76168
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 76165
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76153
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[589].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76317
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[590].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.en.md",
                        lineNumber: 21,
                        columnNumber: 76354
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76351
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[591].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76402
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[592].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/transform/overview",
                                    children: $$contentTexts[593].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 76507
                                }, this),
                                $$contentTexts[594].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 76476
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[595].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/transform/map-node-size",
                                    children: $$contentTexts[596].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 76645
                                }, this),
                                $$contentTexts[597].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 76614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76472
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "customextensionoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#customextensionoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 76861
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 76794
                        }, this),
                        "CustomExtensionOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "CustomExtensionOptions",
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
                                        fileName: "docs/manual/graph/option.en.md",
                                        lineNumber: 21,
                                        columnNumber: 77291
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.en.md",
                                    lineNumber: 21,
                                    columnNumber: 77160
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.en.md",
                                lineNumber: 21,
                                columnNumber: 77086
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.en.md",
                            lineNumber: 21,
                            columnNumber: 76926
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 76762
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[598].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.en.md",
                    lineNumber: 21,
                    columnNumber: 78237
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/graph/option.en.md",
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
                fileName: "docs/manual/graph/option.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/graph/option.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/graph/option.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/graph/option.en.md",
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
//# sourceMappingURL=docs_manual_graph_option_en_md-async.js.map