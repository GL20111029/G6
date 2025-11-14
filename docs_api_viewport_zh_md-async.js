((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/viewport.zh.md'],
{ "docs/api/viewport.zh.md": function (module, exports, __mako_require__){
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
                    id: "视口操作概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#视口操作概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 54
                        }, this),
                        "视口操作概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "视口操作概述",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 503
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 1449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1519
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1553
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1587
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 1481
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "视口操作分类",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#视口操作分类",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 1693
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1642
                        }, this),
                        "视口操作分类",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "视口操作分类",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2091
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1960
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 1886
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 1742
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 1626
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 3037
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3077
                                }, this),
                                $$contentTexts[7].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3144
                                }, this),
                                $$contentTexts[9].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[10].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3207
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 3073
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3255
                                }, this),
                                $$contentTexts[12].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3324
                                }, this),
                                $$contentTexts[14].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 3251
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[16].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3437
                                }, this),
                                $$contentTexts[17].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[18].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3506
                                }, this),
                                $$contentTexts[19].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[20].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3571
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 3433
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[21].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3619
                                }, this),
                                $$contentTexts[22].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[23].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3688
                                }, this),
                                $$contentTexts[24].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[25].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3753
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 3615
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[26].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3801
                                }, this),
                                $$contentTexts[27].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[28].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3870
                                }, this),
                                $$contentTexts[29].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[30].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3935
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 3797
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 3069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-参考",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-参考",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 4051
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 4000
                        }, this),
                        "API 参考",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-参考",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4449
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4318
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 4244
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 4100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 3984
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphzoomtozoom-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphzoomtozoom-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 5514
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 5437
                        }, this),
                        "Graph.zoomTo(zoom, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.zoomTo(zoom,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5974
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5843
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 5769
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 5594
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 5395
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 6920
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[32].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 6953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[33].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 7025
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 7022
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7090
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[35].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7125
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7160
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7195
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[38].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7230
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 7086
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 7079
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7289
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7429
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7285
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7547
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7627
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7662
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7469
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7712
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7751
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7747
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7807
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7673
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 7278
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 7072
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[52].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 7872
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 7869
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[53].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 7919
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphzoombyratio-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphzoombyratio-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 8109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 8031
                        }, this),
                        "Graph.zoomBy(ratio, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.zoomBy(ratio,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8571
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8440
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 8366
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 8190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 7988
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[54].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 9517
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[55].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 9550
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 9622
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 9619
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9687
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9722
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9757
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9792
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[61].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9827
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 9683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 9676
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9991
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10026
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9882
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10070
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[69].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10144
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10140
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10066
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[73].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10348
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10404
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10439
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10270
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 9875
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 9669
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[75].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 10469
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 10466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[76].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 10516
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslatetoposition-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslatetoposition-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 10708
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 10629
                        }, this),
                        "Graph.translateTo(position, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateTo(position,-animation)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11170
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11039
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 10965
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 10789
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 10585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[77].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12116
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[78].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[79].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 12221
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[80].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12286
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[81].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12321
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12356
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12391
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12426
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 12282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 12275
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12520
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12559
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12650
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12481
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12694
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12729
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12768
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12764
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12883
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12690
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 12474
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12268
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[94].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 12913
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12910
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[95].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 12960
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslatebyoffset-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslatebyoffset-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 13148
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 13071
                        }, this),
                        "Graph.translateBy(offset, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateBy(offset,-animation)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13606
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13475
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 13401
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 13227
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 13029
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[96].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 14552
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[97].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 14585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 14657
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 14654
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14722
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14757
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14793
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14829
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14865
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 14718
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 14711
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[106].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15001
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15094
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14921
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[111].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15215
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15135
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 14914
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 14704
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[113].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 15362
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 15359
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[114].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 15410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrotatetoangle-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrotatetoangle-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 15605
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 15525
                        }, this),
                        "Graph.rotateTo(angle, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.rotateTo(angle,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16071
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15940
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 15866
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 15688
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 15480
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[115].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 17017
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[116].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 17051
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[117].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 17124
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 17121
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[118].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17190
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[119].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17226
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17262
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17298
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17334
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 17186
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 17179
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17430
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17502
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17538
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17390
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 17659
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17776
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17579
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 17867
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17960
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17787
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 17383
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 17172
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[136].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 17990
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 17987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[137].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 18038
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrotatebyangle-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrotatebyangle-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 18233
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 18153
                        }, this),
                        "Graph.rotateBy(angle, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.rotateBy(angle,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18699
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18568
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 18494
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 18316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 18108
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 19645
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[139].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 19679
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[140].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 19752
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 19749
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19818
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19854
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19890
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19926
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19962
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 19814
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 19807
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20022
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20094
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20166
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20018
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[153].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20287
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20368
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20404
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20207
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[157].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20495
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20491
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20588
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20415
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 20011
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 19800
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[159].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 20618
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 20615
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[160].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 20666
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfitviewoptions-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfitviewoptions-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 20849
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 20775
                        }, this),
                        "Graph.fitView(options, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.fitView(options,-animation)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21301
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21170
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 21096
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 20925
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 20736
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 22247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[162].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 22281
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[163].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 22354
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 22351
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[164].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22420
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[165].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22456
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[166].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22492
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[167].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22528
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[168].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22564
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 22416
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 22409
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22768
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22620
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 22859
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22976
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22779
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 22613
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 22402
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[177].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 23006
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 23003
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[178].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23072
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[179].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23108
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[180].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23144
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[181].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23180
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 23068
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 23061
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23276
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23348
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23236
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23501
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 23229
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 23054
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[190].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 23561
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 23558
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[191].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 23609
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfitcenteranimation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfitcenteranimation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 23780
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 23712
                        }, this),
                        "Graph.fitCenter(animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.fitCenter(animation)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24218
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24087
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 24013
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 23849
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 23679
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[192].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25164
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[193].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[194].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 25271
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25268
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25337
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[196].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25373
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[197].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25409
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[198].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25445
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[199].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25481
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 25333
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 25326
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[200].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25541
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[201].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25577
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#viewportanimationeffecttiming",
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25617
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25613
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[203].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25698
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25734
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 25537
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 25530
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25319
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[204].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 25764
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25761
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[205].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25812
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetzoom",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetzoom",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 25961
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 25904
                        }, this),
                        "Graph.getZoom()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getZoom()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26377
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26246
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 26172
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 26019
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 25882
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[206].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 27323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[207].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 27357
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[208].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 27430
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 27427
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[209].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 27478
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetposition",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetposition",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 27635
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 27574
                        }, this),
                        "Graph.getPosition()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getPosition()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28059
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27928
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 27854
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 27697
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 27548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[210].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 29005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[211].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 29039
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[212].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 29112
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 29109
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[213].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 29160
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetrotation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetrotation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 29317
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 29256
                        }, this),
                        "Graph.getRotation()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getRotation()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29741
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29610
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 29536
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 29379
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 29230
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[214].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 30687
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[215].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 30721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[216].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 30794
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 30791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[217].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 30842
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetcanvascenter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetcanvascenter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 31007
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 30942
                        }, this),
                        "Graph.getCanvasCenter()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getCanvasCenter()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31439
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31308
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 31234
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 31073
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 30912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[218].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 32385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[219].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 32419
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[220].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 32492
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 32489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[221].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 32540
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetviewportcenter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetviewportcenter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 32709
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 32642
                        }, this),
                        "Graph.getViewportCenter()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getViewportCenter()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33145
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33014
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 32940
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 32777
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 32610
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[222].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 34091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[223].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 34125
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[224].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 34198
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 34195
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[225].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 34246
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetzoomrangezoomrange",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetzoomrangezoomrange",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 34423
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 34352
                        }, this),
                        "Graph.setZoomRange(zoomRange)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setZoomRange(zoomRange)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34867
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34736
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 34662
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 34495
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 34316
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[226].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 35813
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[227].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 35847
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[228].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 35920
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 35917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[229].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35986
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[230].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36022
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[231].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36058
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[232].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36094
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[233].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36130
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 35982
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 35975
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[234].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36190
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[235].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36226
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[236].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36262
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[237].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36298
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[238].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36334
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 36186
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 36179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 35968
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[239].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 36394
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 36391
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[240].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 36442
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetzoomrange",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetzoomrange",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 36601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 36539
                        }, this),
                        "Graph.getZoomRange()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getZoomRange()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37027
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36896
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 36822
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 36664
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 36512
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[241].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 37973
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[242].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 38007
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[243].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 38080
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 38077
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[244].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 38128
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphresize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphresize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 38275
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 38219
                        }, this),
                        "Graph.resize()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.resize()",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38689
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38558
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 38484
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 38332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 38198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[245].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 39635
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[246].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 39669
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphresizewidth-height",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphresizewidth-height",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 39840
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 39772
                        }, this),
                        "Graph.resize(width, height)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.resize(width,-height)",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40280
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40149
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 40075
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 39910
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 39739
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[247].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 41226
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[248].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 41260
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[249].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 41333
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 41330
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[250].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41399
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[251].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41435
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[252].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41471
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[253].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41507
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[254].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41543
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 41395
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 41388
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[256].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41639
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41675
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41711
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[259].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41747
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41599
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[260].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[261].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[262].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[263].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[264].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41936
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41788
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 41592
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 41381
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[265].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.zh.md",
                        lineNumber: 21,
                        columnNumber: 41996
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 41993
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[266].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 42044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "类型定义",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#类型定义",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 42177
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 42128
                        }, this),
                        "类型定义",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "类型定义",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42571
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42440
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 42366
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 42224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 42114
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "viewportanimationeffecttiming",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#viewportanimationeffecttiming",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 43630
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 43556
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44074
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43943
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 43869
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 43702
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 43517
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[267].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 45020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[268].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 45054
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "point",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#point",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 45189
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 45139
                        }, this),
                        "Point",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Point",
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45585
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45454
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 45380
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 45237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 45124
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[269].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 46531
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[270].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 46565
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "fitviewoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fitviewoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 46718
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 46659
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
                                        fileName: "docs/api/viewport.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47001
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.zh.md",
                                lineNumber: 21,
                                columnNumber: 46927
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.zh.md",
                            lineNumber: 21,
                            columnNumber: 46775
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 46635
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[271].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 48078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[272].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.zh.md",
                    lineNumber: 21,
                    columnNumber: 48112
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/viewport.zh.md",
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
                fileName: "docs/api/viewport.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/viewport.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/viewport.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/viewport.zh.md",
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
//# sourceMappingURL=docs_api_viewport_zh_md-async.js.map