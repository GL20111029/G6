((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/ClickSelect.zh.md'],
{ "docs/manual/behavior/ClickSelect.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/click-element.md?watch=parent");
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 2904
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 2938
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 2972
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 3074
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 3025
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3468
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 3337
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 3263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 3121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 3011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 4444
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 4486
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 4414
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 4615
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 4566
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 5009
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 4878
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 4804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 4662
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 4552
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 5955
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                        lineNumber: 26,
                        columnNumber: 5990
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 5987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6068
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                        lineNumber: 26,
                        columnNumber: 6139
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6186
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6219
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 6349
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 6301
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 6741
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6610
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 6536
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 6395
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 6288
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7705
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7740
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7775
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7810
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7845
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 7701
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 7694
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 7904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[19].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[20].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 7969
                                                }, this),
                                                $$contentTexts[21].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 7939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8043
                                                }, this),
                                                $$contentTexts[23].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 8117
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8161
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 7900
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8345
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8201
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#degree",
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8425
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8512
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8688
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8356
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#enable",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8768
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8738
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8855
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8996
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9031
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8699
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9081
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9116
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9186
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 9042
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9236
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9301
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9366
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9431
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9496
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9561
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 9609
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9605
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9653
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 9197
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#neighborstate",
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9733
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9827
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9892
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9957
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10022
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10087
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 9797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[74].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 10135
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10179
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 9664
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10194
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[76].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#unselectedState",
                                                    children: $$contentTexts[77].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10259
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10229
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10355
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10420
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10485
                                                }, this),
                                                $$contentTexts[84].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10550
                                                }, this),
                                                $$contentTexts[86].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[87].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10615
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10659
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10665
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 10190
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10680
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[90].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[91].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10780
                                                }, this),
                                                $$contentTexts[92].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10750
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 10676
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[95].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                        lineNumber: 26,
                                                        columnNumber: 11011
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11007
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 10977
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11218
                                                }, this),
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11283
                                                }, this),
                                                $$contentTexts[100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11349
                                                }, this),
                                                $$contentTexts[102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11416
                                                }, this),
                                                $$contentTexts[104].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 11188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[105].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                                lineNumber: 26,
                                                columnNumber: 11492
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 11488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 11537
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 10938
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 7893
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 7687
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "degree",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#degree",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 11631
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 11580
                        }, this),
                        "degree",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "degree",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 12029
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 11898
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 11824
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 11680
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 11564
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[106].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 12975
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[107].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[108].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13044
                                }, this),
                                $$contentTexts[109].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[110].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13111
                                }, this),
                                $$contentTexts[111].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 13013
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[112].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13214
                                }, this),
                                $$contentTexts[114].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[115].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 13281
                                }, this),
                                $$contentTexts[116].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 26,
                            columnNumber: 13183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 13009
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[117].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[118].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 13400
                            }, this),
                            $$contentTexts[119].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#E4504D"
                                },
                                children: $$contentTexts[120].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 26,
                                columnNumber: 13467
                            }, this),
                            $$contentTexts[121].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[122].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 28,
                                columnNumber: 65
                            }, this),
                            $$contentTexts[123].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#E4504D"
                                },
                                children: $$contentTexts[124].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 28,
                                columnNumber: 132
                            }, this),
                            $$contentTexts[125].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#FFC40C"
                                },
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 30,
                                columnNumber: 65
                            }, this),
                            $$contentTexts[127].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                        lineNumber: 26,
                        columnNumber: 13370
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 26,
                    columnNumber: 13358
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enable",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enable",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 289
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 238
                        }, this),
                        "enable",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enable",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 32,
                                        columnNumber: 687
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 32,
                                    columnNumber: 556
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 482
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 338
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[129].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1633
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[130].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1667
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[131].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 1793
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 1849
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1763
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[133].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[134].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 1951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "neighborstate",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#neighborstate",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 2094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 2036
                        }, this),
                        "neighborState",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "neighborState",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 32,
                                        columnNumber: 2506
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 32,
                                    columnNumber: 2375
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 2301
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 2150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 2013
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 3452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[136].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 3486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 3578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[137].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 3634
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 3548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "unselectedstate",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#unselectedstate",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 3787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 3727
                        }, this),
                        "unselectedState",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "unselectedState",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 32,
                                        columnNumber: 4203
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 32,
                                    columnNumber: 4072
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 3998
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 3845
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 3702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 5149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5213
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5280
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5347
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5414
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 5183
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[149].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 5525
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5617
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 5587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 5800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5753
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 32,
                                        columnNumber: 6190
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 32,
                                    columnNumber: 6059
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 5985
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 5845
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 5741
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "点击选中节点及其直接相连的节点",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#点击选中节点及其直接相连的节点",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 7221
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 7161
                        }, this),
                        "点击选中节点及其直接相连的节点",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "点击选中节点及其直接相连的节点",
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 32,
                                        columnNumber: 7637
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 32,
                                    columnNumber: 7506
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 32,
                                columnNumber: 7432
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 7279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 7136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[151].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 8586
                        }, this),
                        $$contentTexts[152].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#E4504D"
                            },
                            children: $$contentTexts[153].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 32,
                            columnNumber: 8657
                        }, this),
                        $$contentTexts[154].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#0f0"
                            },
                            children: $$contentTexts[155].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 34,
                            columnNumber: 65
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 36,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 36,
                            columnNumber: 44
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#E4504D"
                            },
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 36,
                            columnNumber: 115
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#FFC40C"
                            },
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 38,
                            columnNumber: 65
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 32,
                    columnNumber: 8583
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 40,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 40,
                    columnNumber: 104
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
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 40,
                                columnNumber: 321
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 272
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
                                        fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                        lineNumber: 40,
                                        columnNumber: 715
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                    lineNumber: 40,
                                    columnNumber: 584
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                                lineNumber: 40,
                                columnNumber: 510
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 368
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 40,
                    columnNumber: 258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 1691
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[163].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.zh.md",
                            lineNumber: 40,
                            columnNumber: 1735
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.zh.md",
                    lineNumber: 40,
                    columnNumber: 1661
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/ClickSelect.zh.md",
            lineNumber: 26,
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
                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                lineNumber: 47,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/ClickSelect.zh.md",
                lineNumber: 47,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/ClickSelect.zh.md",
            lineNumber: 47,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/ClickSelect.zh.md",
        lineNumber: 47,
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
//# sourceMappingURL=docs_manual_behavior_ClickSelect_zh_md-async.js.map