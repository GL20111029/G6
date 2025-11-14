((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/coordinate.en.md'],
{ "docs/api/coordinate.en.md": function (module, exports, __mako_require__){
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
                    id: "overview-of-coordinate-systems",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview-of-coordinate-systems",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 153
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 78
                        }, this),
                        "Overview of Coordinate Systems",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview-of-Coordinate-Systems",
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 599
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 468
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 394
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 1545
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1585
                                }, this),
                                $$contentTexts[2].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1581
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1661
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1657
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1737
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1733
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1813
                                }, this),
                                $$contentTexts[8].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1809
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1889
                                }, this),
                                $$contentTexts[10].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1885
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 1577
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[11].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://g.antv.antgroup.com/en/examples/canvas/canvas-basic#coordinates",
                            children: $$contentTexts[12].value
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 1996
                        }, this),
                        $$contentTexts[13].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 1967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        src: "https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*kPfcTKwZG90AAAAAAAAAAAAAARQnAQ",
                        alt: "Coordinate System Diagram"
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 2141
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 2138
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 2276
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 2309
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
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 2423
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 2365
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2835
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2704
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 2630
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 2479
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 2342
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetcanvasbyclientpoint",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetcanvasbyclientpoint",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 3890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 3818
                        }, this),
                        "Graph.getCanvasByClient(point)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getCanvasByClient(point)",
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4336
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4205
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 4131
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 3963
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 3781
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[16].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5282
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[17].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5315
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 5387
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5452
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5487
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5522
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5557
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5592
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 5448
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 5441
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5651
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5686
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[26].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5721
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[27].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5756
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[28].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5791
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 5647
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 5640
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[29].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 5850
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5847
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[30].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5905
                                }, this),
                                $$contentTexts[31].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 5901
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[32].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5983
                                }, this),
                                $$contentTexts[33].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 5979
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 5897
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetcanvasbyviewportpoint",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetcanvasbyviewportpoint",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 6175
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 6101
                        }, this),
                        "Graph.getCanvasByViewport(point)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getCanvasByViewport(point)",
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6625
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6494
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 6420
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 6250
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 6062
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 7571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 7604
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[36].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 7676
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 7673
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7741
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[38].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7776
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[39].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7811
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[40].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7846
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[41].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7881
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 7737
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 7730
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[42].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7940
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7975
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8010
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8045
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8080
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 7936
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 7929
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 7723
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[47].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 8139
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 8136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8194
                                }, this),
                                $$contentTexts[49].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 8190
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8272
                                }, this),
                                $$contentTexts[51].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 8268
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 8186
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetclientbycanvaspoint",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetclientbycanvaspoint",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 8460
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 8388
                        }, this),
                        "Graph.getClientByCanvas(point)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getClientByCanvas(point)",
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8906
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8775
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 8701
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 8533
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 8351
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[52].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 9852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[53].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 9885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[54].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 9957
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 9954
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10022
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10057
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10092
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10127
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10162
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 10018
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10011
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10221
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[61].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10256
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[62].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10291
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10326
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[64].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10361
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 10217
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 10004
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[65].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 10420
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 10417
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[66].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10475
                                }, this),
                                $$contentTexts[67].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10471
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10553
                                }, this),
                                $$contentTexts[69].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10549
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 10467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetviewportbycanvaspoint",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetviewportbycanvaspoint",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 10745
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10671
                        }, this),
                        "Graph.getViewportByCanvas(point)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getViewportByCanvas(point)",
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
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11195
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11064
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 10990
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 10820
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 10632
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[70].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[71].value
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12174
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[72].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 12246
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12243
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[73].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12311
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12346
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[75].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12381
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12416
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[77].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12451
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 12307
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 12300
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[78].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12510
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[79].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12545
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[80].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12580
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[81].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12615
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/api/coordinate.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12650
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/coordinate.en.md",
                                lineNumber: 21,
                                columnNumber: 12506
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 12499
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12293
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[83].value
                    }, void 0, false, {
                        fileName: "docs/api/coordinate.en.md",
                        lineNumber: 21,
                        columnNumber: 12709
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12706
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12764
                                }, this),
                                $$contentTexts[85].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 12760
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/api/coordinate.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12842
                                }, this),
                                $$contentTexts[87].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/coordinate.en.md",
                            lineNumber: 21,
                            columnNumber: 12838
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/coordinate.en.md",
                    lineNumber: 21,
                    columnNumber: 12756
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/coordinate.en.md",
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
                fileName: "docs/api/coordinate.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/coordinate.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/coordinate.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/coordinate.en.md",
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
//# sourceMappingURL=docs_api_coordinate_en_md-async.js.map