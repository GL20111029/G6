((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/render.en.md'],
{ "docs/api/render.en.md": function (module, exports, __mako_require__){
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
                    id: "overview-of-drawing-and-rendering",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview-of-drawing-and-rendering",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 159
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 81
                        }, this),
                        "Overview of Drawing and Rendering",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview-of-Drawing-and-Rendering",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 611
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 406
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 1557
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1597
                                }, this),
                                $$contentTexts[2].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 1593
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1673
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 1669
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 1589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 1750
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
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 1863
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 1805
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2275
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2144
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 2070
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 1919
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 1782
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphdraw",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphdraw",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 3294
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 3240
                        }, this),
                        "Graph.draw()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.draw()",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3704
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3573
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 3499
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 3349
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 3221
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 4650
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 4682
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/api/render.en.md",
                        lineNumber: 21,
                        columnNumber: 4753
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 4750
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[9].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 4827
                        }, this),
                        $$contentTexts[11].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 4799
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[12].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 4925
                        }, this),
                        $$contentTexts[14].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[15].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 4994
                        }, this),
                        $$contentTexts[16].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[17].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5059
                        }, this),
                        $$contentTexts[18].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 4896
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[19].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5131
                        }, this),
                        $$contentTexts[20].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5128
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[21].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5204
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[22].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5276
                        }, this),
                        $$contentTexts[23].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5273
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[24].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5349
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[25].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5421
                        }, this),
                        $$contentTexts[26].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5418
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[27].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5494
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5566
                        }, this),
                        $$contentTexts[29].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5563
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5639
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrender",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrender",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 5785
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5729
                        }, this),
                        "Graph.render()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.render()",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6199
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6068
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 5994
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 5842
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 5708
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[32].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7178
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[33].value
                    }, void 0, false, {
                        fileName: "docs/api/render.en.md",
                        lineNumber: 21,
                        columnNumber: 7250
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[34].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7326
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7297
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[37].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7399
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[38].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7434
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[39].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7469
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7395
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[40].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7512
                        }, this),
                        $$contentTexts[41].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7509
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[42].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[43].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7657
                        }, this),
                        $$contentTexts[44].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7654
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[45].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7730
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[46].value
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7802
                        }, this),
                        $$contentTexts[47].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7799
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[48].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7875
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphclear",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphclear",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 8019
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 7964
                        }, this),
                        "Graph.clear()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.clear()",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8431
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8300
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 8226
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 8075
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 7944
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[49].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9377
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[50].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[51].value
                    }, void 0, false, {
                        fileName: "docs/api/render.en.md",
                        lineNumber: 21,
                        columnNumber: 9482
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9479
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[52].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9529
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[53].value
                    }, void 0, false, {
                        fileName: "docs/api/render.en.md",
                        lineNumber: 21,
                        columnNumber: 9565
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9562
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[54].value
                }, void 0, false, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9612
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "usage-tips",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#usage-tips",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 9756
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 9701
                        }, this),
                        "Usage Tips",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Usage-Tips",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10162
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10031
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 9957
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 9809
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 9681
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "choosing-between-draw-and-render",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#choosing-between-draw-and-render",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 11227
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 11150
                        }, this),
                        "Choosing between draw and render",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Choosing-between-draw-and-render",
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
                                        fileName: "docs/api/render.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11677
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11546
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.en.md",
                                lineNumber: 21,
                                columnNumber: 11472
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 11302
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 11108
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12657
                                }, this),
                                $$contentTexts[57].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12761
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12722
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 12627
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[60].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[61].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12836
                                }, this),
                                $$contentTexts[62].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12905
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13010
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/render.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12901
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.en.md",
                            lineNumber: 21,
                            columnNumber: 12806
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.en.md",
                    lineNumber: 21,
                    columnNumber: 12623
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/render.en.md",
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
                fileName: "docs/api/render.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/render.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/render.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/render.en.md",
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
//# sourceMappingURL=docs_api_render_en_md-async.js.map