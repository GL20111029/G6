((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/ProcessParallelEdges.en.md'],
{ "docs/manual/transform/ProcessParallelEdges.en.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 139
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 87
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 539
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                    lineNumber: 21,
                                    columnNumber: 408
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 334
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "distance",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#distance",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 1556
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 1503
                        }, this),
                        "distance",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "distance",
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
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1958
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1827
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 1753
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 1607
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 1485
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 2919
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                        lineNumber: 21,
                        columnNumber: 2916
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 2904
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 2970
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "edges",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edges",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 3067
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 3017
                        }, this),
                        "edges",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "edges",
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
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3463
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3332
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 3258
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 3115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 3002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 4424
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                        lineNumber: 21,
                        columnNumber: 4421
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 4409
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 4475
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
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 4570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 4521
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                            type: "success",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 4609
                        }, this),
                        " mode",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Required--mode",
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
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5030
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4899
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 4825
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 4673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 4507
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[6].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 5991
                            }, this),
                            $$contentTexts[7].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[8].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6050
                            }, this),
                            $$contentTexts[9].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[10].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6117
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                        lineNumber: 21,
                        columnNumber: 5988
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 5976
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 6173
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    $$contentTexts[12].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6243
                                    }, this),
                                    $$contentTexts[14].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6214
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 6210
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    $$contentTexts[15].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6350
                                    }, this),
                                    $$contentTexts[17].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6321
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 6317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 6206
                }, this),
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
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6494
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 6444
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
                                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6890
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6759
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 6685
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                            lineNumber: 21,
                            columnNumber: 6542
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 6429
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[18].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 7851
                            }, this),
                            $$contentTexts[19].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[20].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 7912
                            }, this),
                            $$contentTexts[21].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/graph/option#edgedata",
                                children: $$contentTexts[22].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 7973
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[23].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 8044
                            }, this),
                            $$contentTexts[24].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[25].value
                            }, void 0, false, {
                                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                                lineNumber: 21,
                                columnNumber: 8105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                        lineNumber: 21,
                        columnNumber: 7848
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 7836
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[26].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                    lineNumber: 21,
                    columnNumber: 8157
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
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
                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/transform/ProcessParallelEdges.en.md",
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
//# sourceMappingURL=docs_manual_transform_ProcessParallelEdges_en_md-async.js.map