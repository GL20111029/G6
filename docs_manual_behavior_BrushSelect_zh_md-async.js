((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/BrushSelect.zh.md'],
{ "docs/manual/behavior/BrushSelect.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/brush-select.md?watch=parent");
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
                    id: "概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 1433
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
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 1479
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 2904
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 2938
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 2900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "在线体验",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#在线体验",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 3040
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 2991
                        }, this),
                        "在线体验",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "在线体验",
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3434
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3303
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 3229
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 3087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 2977
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4410
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4452
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 4380
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
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 4581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4532
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4975
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4844
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 4770
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4628
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 4518
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 5921
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                        lineNumber: 23,
                        columnNumber: 5956
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 5953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6034
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[9].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                        lineNumber: 23,
                        columnNumber: 6105
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6151
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6184
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
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 6314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 6266
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6706
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6575
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 6501
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 6360
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7670
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7705
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7740
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7775
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7810
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 7666
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 7659
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[18].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7934
                                                }, this),
                                                $$contentTexts[20].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8008
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8004
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[23].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8082
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7865
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8310
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8166
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8425
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8601
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8321
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8716
                                                }, this),
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8781
                                                }, this),
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8846
                                                }, this),
                                                $$contentTexts[43].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8946
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9011
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9076
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8916
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9146
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8612
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9226
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9302
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#immediately",
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9367
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9499
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9157
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9579
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9638
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9703
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9768
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9833
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[70].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9881
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9510
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10051
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9936
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[76].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[77].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10166
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10231
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10296
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10361
                                                }, this),
                                                $$contentTexts[84].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10426
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10474
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10518
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10062
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[88].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style",
                                                    children: $$contentTexts[89].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10598
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10654
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10695
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[92].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[93].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10775
                                                }, this),
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[95].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                        lineNumber: 23,
                                                        columnNumber: 10848
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10844
                                                }, this),
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11046
                                                }, this),
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11115
                                                }, this),
                                                $$contentTexts[99].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11147
                                                }, this),
                                                $$contentTexts[101].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[102].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11214
                                                }, this),
                                                $$contentTexts[103].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11281
                                                }, this),
                                                $$contentTexts[105].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10745
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11384
                                                }, this),
                                                $$contentTexts[108].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11451
                                                }, this),
                                                $$contentTexts[110].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[111].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11518
                                                }, this),
                                                $$contentTexts[112].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[113].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11585
                                                }, this),
                                                $$contentTexts[114].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11353
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[115].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[116].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11688
                                                }, this),
                                                $$contentTexts[117].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11760
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10706
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 7858
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 7652
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "immediately",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#immediately",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 11864
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 11808
                        }, this),
                        "immediately",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "immediately",
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12272
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12141
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 12067
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 11918
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 11787
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[118].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[119].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13248
                        }, this),
                        $$contentTexts[120].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[121].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13319
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13411
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13467
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13381
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
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 13598
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13549
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13992
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13861
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 13787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13645
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13535
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[123].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 14938
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[124].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14980
                                }, this),
                                $$contentTexts[125].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 14976
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[126].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15056
                                }, this),
                                $$contentTexts[127].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15052
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[128].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15132
                                }, this),
                                $$contentTexts[129].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15128
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[130].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15208
                                }, this),
                                $$contentTexts[131].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15204
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 14972
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[132].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15377
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[133].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15419
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15347
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
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 15552
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15502
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15948
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15817
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 15743
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15600
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15487
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[134].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16912
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[135].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16948
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[136].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16984
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[137].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 17020
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 16908
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 16901
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17116
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17076
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17239
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[144].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 17315
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17311
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17199
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17477
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17365
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17522
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17630
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17518
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17753
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17641
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[157].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17844
                                                }, this),
                                                $$contentTexts[158].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[159].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17911
                                                }, this),
                                                $$contentTexts[160].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[161].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17978
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18023
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17764
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18146
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18034
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18157
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[170].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18360
                                                }, this),
                                                $$contentTexts[171].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[172].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18427
                                                }, this),
                                                $$contentTexts[173].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[174].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18494
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18539
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18280
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18554
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18626
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18662
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18550
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18815
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18703
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18830
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18866
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18938
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18826
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18953
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19025
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19061
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18949
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19076
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19184
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19072
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19195
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19430
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19481
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[200].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 19557
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19553
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19441
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19719
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19607
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[206].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19810
                                                }, this),
                                                $$contentTexts[207].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[208].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19877
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19922
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19730
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 20009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 20045
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19933
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 17069
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 16894
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20105
                        }, this),
                        $$contentTexts[214].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[215].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20180
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20272
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[216].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20328
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20242
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "实际案例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#实际案例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 20459
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20410
                        }, this),
                        "实际案例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "实际案例",
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
                                        fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 20853
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20722
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 20648
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20506
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20396
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21829
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[217].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21873
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 21799
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/BrushSelect.zh.md",
            lineNumber: 23,
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
                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/BrushSelect.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/BrushSelect.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/BrushSelect.zh.md",
        lineNumber: 30,
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
//# sourceMappingURL=docs_manual_behavior_BrushSelect_zh_md-async.js.map