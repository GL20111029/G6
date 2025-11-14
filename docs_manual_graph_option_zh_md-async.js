((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/option.zh.md'],
{ "docs/manual/graph/option.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 157
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1497
                                }, this),
                                $$contentTexts[2].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#viewportanimationeffecttiming",
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1581
                                }, this),
                                $$contentTexts[4].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#viewportanimationeffecttiming",
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1680
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 1468
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 1465
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 1453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[7].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 1829
                        }, this),
                        $$contentTexts[9].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 1896
                        }, this),
                        $$contentTexts[11].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[12].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 1961
                        }, this),
                        $$contentTexts[13].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 1801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2071
                                }, this),
                                $$contentTexts[16].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 2067
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2145
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 2141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 2063
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[19].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 2220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[20].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 2405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2819
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2688
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 2614
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 2462
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3783
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3818
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3853
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3888
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3923
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 3779
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4047
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4079
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4144
                                                }, this),
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4176
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4250
                                                }, this),
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4315
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4363
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3978
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4487
                                                }, this),
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4519
                                                }, this),
                                                $$contentTexts[42].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4584
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4616
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4681
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4713
                                                }, this),
                                                $$contentTexts[48].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4787
                                                }, this),
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4852
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4917
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4965
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5009
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4418
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 3971
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 5149
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5593
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5462
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 5388
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 5221
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 5036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[55].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 6683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7089
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6958
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 6884
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 6736
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 6608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[56].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 8050
                            }, this),
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 8111
                            }, this),
                            $$contentTexts[59].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 8180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 8047
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 8035
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 8236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[62].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 8298
                        }, this),
                        $$contentTexts[64].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 8442
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8848
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8717
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 8643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 8495
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 8367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 9809
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 9806
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 9794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 9861
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 9994
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10392
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10261
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 10187
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 10043
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 9927
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#canvasconfig",
                            children: $$contentTexts[68].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11353
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 11350
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 11338
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[69].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11457
                        }, this),
                        $$contentTexts[71].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[72].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11522
                        }, this),
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11587
                        }, this),
                        $$contentTexts[75].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11652
                        }, this),
                        $$contentTexts[77].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11717
                        }, this),
                        $$contentTexts[79].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[80].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11782
                        }, this),
                        $$contentTexts[81].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 11930
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12340
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12209
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 12135
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 11985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13304
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13339
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13374
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[85].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13409
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[86].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13444
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 13300
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
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
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13643
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13499
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13798
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13654
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13883
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13953
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13809
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14111
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13964
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
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
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14193
                                                }, this),
                                                $$contentTexts[106].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14350
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14122
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14509
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14361
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[114].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#renderer",
                                                    children: $$contentTexts[115].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14591
                                                }, this),
                                                $$contentTexts[116].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[117].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[118].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14709
                                                }, this),
                                                $$contentTexts[119].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14776
                                                }, this),
                                                $$contentTexts[121].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[122].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14843
                                                }, this),
                                                $$contentTexts[123].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[124].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14910
                                                }, this),
                                                $$contentTexts[125].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15018
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14520
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15177
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15029
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 13492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 15277
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 15223
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15681
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15550
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 15476
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 15329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 15204
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[131].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 16642
                            }, this),
                            $$contentTexts[132].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[133].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 16705
                            }, this),
                            $$contentTexts[134].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[135].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 16768
                            }, this),
                            $$contentTexts[136].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 16639
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 16627
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[137].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 16848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[138].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[139].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16917
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 16886
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[140].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[141].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16993
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 16962
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[142].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[143].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17069
                                }, this),
                                $$contentTexts[144].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[145].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17136
                                }, this),
                                $$contentTexts[146].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#canvasconfig",
                                    children: $$contentTexts[147].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17203
                                }, this),
                                $$contentTexts[148].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 17038
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 16882
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 17366
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 17315
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17764
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17633
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 17559
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 17415
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 17299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[149].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 18722
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 18710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[150].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 18769
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 18833
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 18900
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 18967
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19034
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19101
                        }, this),
                        $$contentTexts[161].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19168
                        }, this),
                        $$contentTexts[163].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[164].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19235
                        }, this),
                        $$contentTexts[165].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[166].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19302
                        }, this),
                        $$contentTexts[167].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[168].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19369
                        }, this),
                        $$contentTexts[169].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[170].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19436
                        }, this),
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19503
                        }, this),
                        $$contentTexts[173].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19570
                        }, this),
                        $$contentTexts[175].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[176].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19637
                        }, this),
                        $$contentTexts[177].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19704
                        }, this),
                        $$contentTexts[179].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19771
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19838
                        }, this),
                        $$contentTexts[183].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19905
                        }, this),
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 19972
                        }, this),
                        $$contentTexts[187].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[188].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20039
                        }, this),
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20106
                        }, this),
                        $$contentTexts[191].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[192].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20173
                        }, this),
                        $$contentTexts[193].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[194].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20240
                        }, this),
                        $$contentTexts[195].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[196].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20307
                        }, this),
                        $$contentTexts[197].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[198].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20374
                        }, this),
                        $$contentTexts[199].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[200].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20441
                        }, this),
                        $$contentTexts[201].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[202].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20508
                        }, this),
                        $$contentTexts[203].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20575
                        }, this),
                        $$contentTexts[205].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20642
                        }, this),
                        $$contentTexts[207].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[208].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20709
                        }, this),
                        $$contentTexts[209].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[210].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20776
                        }, this),
                        $$contentTexts[211].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[212].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20843
                        }, this),
                        $$contentTexts[213].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[214].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20910
                        }, this),
                        $$contentTexts[215].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[216].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 20977
                        }, this),
                        $$contentTexts[217].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[218].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21044
                        }, this),
                        $$contentTexts[219].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[220].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21111
                        }, this),
                        $$contentTexts[221].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[222].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21178
                        }, this),
                        $$contentTexts[223].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 18803
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[224].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor",
                            children: $$contentTexts[225].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21279
                        }, this),
                        $$contentTexts[226].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 21249
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 21494
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21433
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21912
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21781
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 21707
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 21553
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 21407
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[227].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 22873
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 22870
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 22858
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[228].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 22926
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[229].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio",
                            children: $$contentTexts[230].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 22990
                        }, this),
                        $$contentTexts[231].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 22960
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 23200
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 23150
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23596
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23465
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 23391
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 23248
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 23135
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[232].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 24557
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 24554
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 24542
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[233].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 24610
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 24711
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 24660
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25109
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24978
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 24904
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 24760
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 24644
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[234].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 26070
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 26067
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 26055
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[235].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 26123
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 26228
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 26175
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26630
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26499
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 26425
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 26279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 26157
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[236].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 27591
                            }, this),
                            $$contentTexts[237].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[238].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 27654
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 27588
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 27576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[239].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 27707
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[240].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[241].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 27771
                        }, this),
                        $$contentTexts[242].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[243].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 27838
                        }, this),
                        $$contentTexts[244].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[245].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 27905
                        }, this),
                        $$contentTexts[246].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[247].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 27972
                        }, this),
                        $$contentTexts[248].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 27741
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[249].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 28046
                        }, this),
                        $$contentTexts[250].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 28043
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[251].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 28121
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 28260
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 28208
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28660
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28529
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 28455
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 28310
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 28191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[252].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 29621
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 29618
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29606
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[253].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29674
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[254].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29708
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[255].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 29745
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29742
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[256].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29793
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 29934
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 29881
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30336
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30205
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 30131
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 29985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 29863
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[257].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 31297
                            }, this),
                            $$contentTexts[258].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[259].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 31360
                            }, this),
                            $$contentTexts[260].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[261].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 31431
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 31294
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 31282
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[262].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 31488
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 31579
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 31533
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31967
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31836
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 31762
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 31623
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 31522
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[263].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 32928
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 32925
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 32913
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[264].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 32981
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 33072
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 33026
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33460
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33329
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 33255
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 33116
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 33015
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[265].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 34421
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 34418
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 34406
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[266].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 34474
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 34571
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 34522
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34965
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34834
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 34760
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 34618
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 34508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[267].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 35926
                            }, this),
                            $$contentTexts[268].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[269].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 35989
                            }, this),
                            $$contentTexts[270].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[271].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 36060
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 35923
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 35911
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[272].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 36117
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 36224
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 36170
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36628
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36497
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 36423
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 36276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 36151
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[273].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 37589
                            }, this),
                            $$contentTexts[274].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[275].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 37652
                            }, this),
                            $$contentTexts[276].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[277].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 37723
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 37586
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 37574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[278].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 37780
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 37887
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 37833
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38291
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38160
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 38086
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 37939
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 37814
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[279].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#animationeffecttiming",
                                    children: $$contentTexts[280].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39283
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 39252
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 39249
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 39237
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[281].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 39373
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[282].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 39407
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 39538
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 39472
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 39761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 39602
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 39441
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[283].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40930
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[284].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40966
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[285].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41002
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[286].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41038
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[287].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41074
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 40926
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 40919
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[288].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[289].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[290].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41206
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[291].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41242
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41278
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41130
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[292].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[293].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41329
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[294].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41369
                                                }, this),
                                                $$contentTexts[295].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[296].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41436
                                                }, this),
                                                $$contentTexts[297].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[298].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41503
                                                }, this),
                                                $$contentTexts[299].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[300].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41570
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[301].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 41619
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41664
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41289
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[302].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[303].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[304].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[305].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41823
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41675
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[306].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41838
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[307].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[308].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41910
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[309].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41946
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41982
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41834
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[310].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[311].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[312].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42073
                                                }, this),
                                                $$contentTexts[313].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[314].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42140
                                                }, this),
                                                $$contentTexts[315].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[316].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42207
                                                }, this),
                                                $$contentTexts[317].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[318].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42274
                                                }, this),
                                                $$contentTexts[319].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[320].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42341
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[321].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42390
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42386
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42435
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41993
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[322].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[323].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[324].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42522
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[325].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42594
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42446
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 41123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 40912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[326].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 42624
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 42621
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[327].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 42672
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 42805
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 42756
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 43199
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43068
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 42994
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 42852
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 42742
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#graphdata",
                            children: $$contentTexts[328].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 44160
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 44157
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 44145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[329].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 44233
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 44340
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 44286
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44744
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44613
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 44539
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 44392
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 44267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[330].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45708
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[331].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45744
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[332].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45780
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[333].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45816
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[334].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45852
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 45704
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 45697
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[335].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[336].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#nodedata",
                                                    children: $$contentTexts[337].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45988
                                                }, this),
                                                $$contentTexts[338].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45984
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[339].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[340].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46111
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45908
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[341].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[342].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#edgedata",
                                                    children: $$contentTexts[343].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46232
                                                }, this),
                                                $$contentTexts[344].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[345].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[346].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46355
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[347].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[348].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#combodata",
                                                    children: $$contentTexts[349].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/option.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46476
                                                }, this),
                                                $$contentTexts[350].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[351].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[352].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46600
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46396
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 45901
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 45690
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 46728
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 46675
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47130
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46999
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 46925
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 46779
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 46657
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[353].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48094
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[354].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48130
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[355].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48166
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[356].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48202
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[357].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48238
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 48090
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 48083
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[358].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[359].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48334
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[360].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48370
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[361].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[362].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48442
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48294
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[363].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[364].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[365].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48631
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48483
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[367].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48718
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[370].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48754
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48790
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48642
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[373].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48949
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[375].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[376].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49000
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[377].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[378].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48960
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[379].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49159
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49231
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49267
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49119
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[383].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[384].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49318
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[385].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[386].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49426
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49278
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 48287
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 48076
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 49524
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 49471
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49926
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49795
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 49721
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 49575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 49453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[387].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50890
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[388].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50926
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[389].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50962
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[390].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50998
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[391].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 51034
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 50886
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 50879
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51094
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[394].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51166
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[395].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[396].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51238
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51090
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[397].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[400].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[401].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51427
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51279
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[402].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[403].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[404].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[405].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51616
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51468
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[406].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51631
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[408].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[409].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51775
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51627
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[410].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[411].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[412].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[413].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51934
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51786
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[414].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51949
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[415].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51985
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[416].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52093
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51945
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[418].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[419].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[420].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[421].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52216
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52104
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 51083
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 50872
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 52352
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 52298
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52756
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52625
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 52551
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 52404
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 52279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[422].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53720
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[423].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53756
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[424].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53792
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[425].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53828
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[426].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53864
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 53716
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 53709
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[427].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53996
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[430].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54032
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54068
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53920
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[432].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[433].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[434].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54185
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[435].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54257
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54109
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[436].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[437].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[438].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[439].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54416
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54268
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[441].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54539
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54427
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54626
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[446].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54662
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54734
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54586
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54749
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54785
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54821
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54893
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54745
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 53913
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 53702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[452].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 54923
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 54920
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[453].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 54971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            $$contentTexts[454].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/data",
                                children: $$contentTexts[455].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 55076
                            }, this),
                            $$contentTexts[456].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 55045
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 55041
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 55234
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 55185
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 55628
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55497
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 55423
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 55281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 55171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#nodeoptions",
                            children: $$contentTexts[457].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 56589
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 56586
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 56574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[458].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 56664
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 56775
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 56719
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57052
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 56978
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 56829
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 56698
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[459].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58147
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[460].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58183
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[461].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58219
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[462].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58255
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[463].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58291
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 58143
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 58136
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[464].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[465].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/node/base-node#type",
                                                children: $$contentTexts[466].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[467].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58517
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58347
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58613
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/node/base-node#style",
                                                children: $$contentTexts[470].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58653
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58649
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[471].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58776
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58573
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[472].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[473].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/node/base-node#state",
                                                children: $$contentTexts[474].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58867
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58990
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58787
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59041
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/node/base-node#palette",
                                                children: $$contentTexts[478].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59081
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59077
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[479].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59206
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59001
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[480].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[481].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/node/base-node#animation",
                                                children: $$contentTexts[482].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59297
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[483].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59388
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59424
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59217
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 58340
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 58129
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[484].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/base-node",
                            children: $$contentTexts[485].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 59481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 59451
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[486].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 59564
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 59561
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[487].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 59612
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 59745
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 59696
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 60139
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60008
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 59934
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 59792
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 59682
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#edgeoptions",
                            children: $$contentTexts[488].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 61100
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 61097
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 61085
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[489].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 61175
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 61286
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 61230
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 61694
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61563
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 61489
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 61340
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 61209
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[490].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62658
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[491].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62694
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[492].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62730
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[493].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62766
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[494].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62802
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 62654
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 62647
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/edge/base-edge#type",
                                                children: $$contentTexts[497].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 62938
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62934
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[498].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63028
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63073
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 62858
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[500].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/edge/base-edge#style",
                                                children: $$contentTexts[501].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63164
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63287
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63084
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[503].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63338
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/edge/base-edge#state",
                                                children: $$contentTexts[505].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63378
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[506].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63501
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63298
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63516
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/edge/base-edge#palette",
                                                children: $$contentTexts[509].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63592
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63717
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63512
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[511].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[512].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/edge/base-edge#animation",
                                                children: $$contentTexts[513].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63808
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[514].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63935
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63728
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 62851
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 62640
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[515].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/edge/base-edge",
                            children: $$contentTexts[516].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 63992
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 63962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[517].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 64075
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 64072
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[518].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 64123
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 64258
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 64208
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64654
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 64523
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 64449
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 64306
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 64193
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#combooptions",
                            children: $$contentTexts[519].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 65615
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 65612
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 65600
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[520].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 65691
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[521].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65743
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[522].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65779
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[523].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65815
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[524].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65851
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[525].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65887
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 65739
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 65732
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[526].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[527].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/combo/base-combo#type",
                                                children: $$contentTexts[528].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66023
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66019
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[529].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66115
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66111
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65943
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[530].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[531].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/combo/base-combo#style",
                                                children: $$contentTexts[532].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66251
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[533].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66340
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66376
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66171
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[534].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[535].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/combo/base-combo#state",
                                                children: $$contentTexts[536].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66467
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[537].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66592
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66387
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[538].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[539].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/combo/base-combo#palette",
                                                children: $$contentTexts[540].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66683
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[541].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66810
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66603
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[542].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[543].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "/manual/element/combo/base-combo#animation",
                                                children: $$contentTexts[544].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/option.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66901
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66897
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[545].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/graph/option.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67030
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66821
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 65936
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 65725
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[546].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/combo/base-combo",
                            children: $$contentTexts[547].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 67087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 67057
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[548].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 67172
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 67169
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[549].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 67220
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 67357
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 67306
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 67755
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67624
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 67550
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 67406
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 67290
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[550].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 68716
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 68713
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 68701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[551].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 68769
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[552].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 68806
                        }, this),
                        $$contentTexts[553].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 68803
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[554].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 68881
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 69016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 68966
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 69412
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 69281
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 69207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 69064
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 68951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[555].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70373
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 70370
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 70358
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[556].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[557].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70456
                        }, this),
                        $$contentTexts[558].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[559].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70523
                        }, this),
                        $$contentTexts[560].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[561].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70590
                        }, this),
                        $$contentTexts[562].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 70426
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 70734
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70680
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 71138
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 71007
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 70933
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 70786
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 70661
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[563].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[564].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 72130
                                }, this),
                                $$contentTexts[565].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 72099
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 72096
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72084
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[566].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72248
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[567].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 72285
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72282
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[568].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72333
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[569].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/behavior/overview",
                                    children: $$contentTexts[570].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 72438
                                }, this),
                                $$contentTexts[571].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 72407
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[572].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/behavior/auto-adapt-label",
                                    children: $$contentTexts[573].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 72572
                                }, this),
                                $$contentTexts[574].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 72541
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72403
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 72757
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 72705
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 72952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 72807
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 72688
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[575].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[576].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 74149
                                }, this),
                                $$contentTexts[577].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 74118
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 74115
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[578].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[579].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 74304
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74301
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[580].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74352
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[581].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/plugin/overview",
                                    children: $$contentTexts[582].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 74457
                                }, this),
                                $$contentTexts[583].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 74426
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[584].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/plugin/background",
                                    children: $$contentTexts[585].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 74589
                                }, this),
                                $$contentTexts[586].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 74558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74422
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 74772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 74717
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 75178
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 75047
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 74973
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 74825
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 74697
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[587].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#customextensionoptions",
                                    children: $$contentTexts[588].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76170
                                }, this),
                                $$contentTexts[589].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 76139
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 76136
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76124
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[590].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76288
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[591].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/option.zh.md",
                        lineNumber: 21,
                        columnNumber: 76325
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[592].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76373
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[593].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/transform/overview",
                                    children: $$contentTexts[594].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76478
                                }, this),
                                $$contentTexts[595].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 76447
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[596].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/transform/map-node-size",
                                    children: $$contentTexts[597].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76613
                                }, this),
                                $$contentTexts[598].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 76582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76443
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
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 76826
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 76759
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
                                        fileName: "docs/manual/graph/option.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 77256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/option.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 77125
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/option.zh.md",
                                lineNumber: 21,
                                columnNumber: 77051
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/graph/option.zh.md",
                            lineNumber: 21,
                            columnNumber: 76891
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 76727
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[599].value
                }, void 0, false, {
                    fileName: "docs/manual/graph/option.zh.md",
                    lineNumber: 21,
                    columnNumber: 78202
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/graph/option.zh.md",
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
                fileName: "docs/manual/graph/option.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/graph/option.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/graph/option.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/graph/option.zh.md",
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
//# sourceMappingURL=docs_manual_graph_option_zh_md-async.js.map