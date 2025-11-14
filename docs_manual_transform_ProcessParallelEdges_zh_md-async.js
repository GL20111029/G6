((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/ProcessParallelEdges.zh.md'],
{ "docs/manual/transform/ProcessParallelEdges.zh.md": function (module, exports, __mako_require__){
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
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "概述",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#概述",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 50
                            }, this),
                            "概述",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "概述",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 487
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 356
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 282
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 1433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 1469
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 1503
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 1465
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "使用场景",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#使用场景",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1605
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 1556
                            }, this),
                            "使用场景",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "使用场景",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1999
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1868
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1794
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 1652
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 1542
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[3].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 2945
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2985
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 2981
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 3022
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3067
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 3063
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 2977
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "基本用法",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#基本用法",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3172
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 3123
                            }, this),
                            "基本用法",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "基本用法",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3566
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3435
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3361
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 3219
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 3109
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 4515
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4512
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4561
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[9].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4593
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[10].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 4664
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4661
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[11].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4711
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[12].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4744
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "配置项",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置项",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4874
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 4826
                            }, this),
                            "配置项",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置项",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5266
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5135
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5061
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 4920
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 4813
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6370
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6226
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 6219
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[18].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6429
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[19].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6464
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6499
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6534
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6569
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6425
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[23].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6613
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6648
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6683
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6718
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6753
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6609
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[27].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6768
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6803
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6838
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[30].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6873
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6908
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6764
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6923
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[32].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#mode",
                                                        children: $$contentTexts[33].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 6988
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6958
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7047
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7043
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[35].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7095
                                                    }, this),
                                                    $$contentTexts[36].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[37].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7160
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7091
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7204
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6919
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7219
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[39].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#style",
                                                        children: $$contentTexts[40].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7284
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7254
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[41].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/data#%E8%BE%B9%E6%95%B0%E6%8D%AEedgedata",
                                                        children: $$contentTexts[42].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7370
                                                    }, this),
                                                    $$contentTexts[43].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7340
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[44].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7494
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7529
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7215
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 6418
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 6212
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "mode",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#mode",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7619
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 7570
                            }, this),
                            "mode",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "mode",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8013
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7882
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7808
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 7666
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 7556
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[45].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 8959
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[46].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9000
                                }, this),
                                $$contentTexts[47].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E5%90%88%E5%B9%B6%E6%A8%A1%E5%BC%8F",
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9065
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 8996
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 8992
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[49].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9160
                            }, this),
                            $$contentTexts[50].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/Line",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9262
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9225
                            }, this),
                            $$contentTexts[52].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 9157
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9346
                                }, this),
                                $$contentTexts[54].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E6%8D%86%E7%BB%91%E6%A8%A1%E5%BC%8F",
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9411
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 9342
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 9338
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[56].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9506
                            }, this),
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/Quadratic",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[58].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9613
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9571
                            }, this),
                            $$contentTexts[59].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9685
                            }, this),
                            $$contentTexts[61].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[62].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 9750
                            }, this),
                            $$contentTexts[63].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 9503
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[64].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 9891
                        }, this),
                        $$contentTexts[66].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[67].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 9956
                        }, this),
                        $$contentTexts[68].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                            lineNumber: 21,
                            columnNumber: 10021
                        }, this),
                        $$contentTexts[70].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                    lineNumber: 21,
                    columnNumber: 9862
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                lineNumber: 21,
                columnNumber: 9825
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "style",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#style",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10193
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 10143
                            }, this),
                            "style",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "style",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10589
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10458
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10384
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 10241
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 10128
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[71].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 11535
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "pathstyleprops",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#pathstyleprops",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11651
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 11592
                            }, this),
                            "PathStyleProps",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "PathStyleProps",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12065
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11934
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11860
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 11708
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 11568
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[72].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g.antv.antgroup.com/api/basic/path#pathstyleprops",
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 13040
                            }, this),
                            $$contentTexts[74].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 13011
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13182
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 13175
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[80].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13385
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[81].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13420
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[82].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13455
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13494
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13490
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13538
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13381
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[84].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13553
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[85].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13588
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13623
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13658
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13693
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13549
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13708
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13743
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[90].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 13782
                                                    }, this),
                                                    $$contentTexts[91].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[92].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 13847
                                                    }, this),
                                                    $$contentTexts[93].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[94].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 13912
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13778
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[95].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13960
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 13956
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14004
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13704
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[96].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14019
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[97].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14054
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[98].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14089
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14124
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14159
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14015
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[100].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14174
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[101].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14210
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14246
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[103].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14282
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14318
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14170
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[104].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14333
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[105].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14369
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[106].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 14409
                                                    }, this),
                                                    $$contentTexts[107].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[108].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 14476
                                                    }, this),
                                                    $$contentTexts[109].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[110].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 14543
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14405
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[111].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14592
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14588
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14637
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14329
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[112].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14652
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[113].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14688
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[114].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14724
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[115].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14760
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14796
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14648
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[116].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14811
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[117].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14847
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[118].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14883
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14919
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14955
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14807
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[120].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14970
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[121].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15006
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[122].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15042
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[123].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15078
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15114
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14966
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[124].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15129
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15165
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[126].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15201
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[127].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15237
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15273
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15125
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[128].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15288
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[129].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15324
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15360
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[131].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15396
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15432
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15284
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[132].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15447
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[133].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15483
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15519
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[135].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15555
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15591
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15443
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[136].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15606
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[137].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15642
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[138].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 15682
                                                    }, this),
                                                    $$contentTexts[139].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[140].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 15749
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15678
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[141].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15798
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15794
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15843
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15602
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[142].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15858
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[143].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15894
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[144].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15930
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15970
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15966
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16015
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15854
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[146].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16030
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[147].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16066
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[148].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16102
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[149].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16138
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16174
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16026
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[150].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16189
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[151].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16225
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[152].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 16265
                                                    }, this),
                                                    $$contentTexts[153].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[154].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 16332
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16261
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[155].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16381
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16377
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16426
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16185
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 13374
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 13168
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "代码示例",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#代码示例",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16516
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 16467
                            }, this),
                            "代码示例",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "代码示例",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16910
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16779
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16705
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 16563
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 16453
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "捆绑模式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#捆绑模式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17919
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 17870
                            }, this),
                            "捆绑模式",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "捆绑模式",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18313
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18182
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18108
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 17966
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 17856
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 19289
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[156].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 19333
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 19259
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "合并模式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#合并模式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19464
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 19415
                            }, this),
                            "合并模式",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "合并模式",
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
                                            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19858
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19727
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19653
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 19511
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 19401
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[157].value
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 20804
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[158].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[159].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20873
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 20842
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[160].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20953
                                    }, this),
                                    $$contentTexts[162].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[163].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21020
                                    }, this),
                                    $$contentTexts[164].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[165].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21087
                                    }, this),
                                    $$contentTexts[166].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 20922
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 20838
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 21194
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                                lineNumber: 21,
                                columnNumber: 21238
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                        lineNumber: 21,
                        columnNumber: 21164
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                lineNumber: 21,
                columnNumber: 10102
            }, this)
        ]
    }, void 0, true);
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
                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/transform/ProcessParallelEdges.zh.md",
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
//# sourceMappingURL=docs_manual_transform_ProcessParallelEdges_zh_md-async.js.map