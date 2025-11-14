((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/BubbleSets.zh.md'],
{ "docs/manual/plugin/BubbleSets.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/plugins/bubble-sets.md?watch=parent");
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
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
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
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 2904
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 2938
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 2972
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 2900
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
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 3074
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 3025
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3468
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3337
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 3263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 3121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 3011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 4414
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 4446
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
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 4569
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 4520
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4963
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4832
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 4758
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 4616
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 4506
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 5939
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 5981
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 5909
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
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 6108
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 6060
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6500
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6369
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 6295
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 6154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 6047
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7464
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7498
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7532
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7567
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7602
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 7460
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 7453
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7661
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7731
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[16].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7770
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7814
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7657
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7858
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7893
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7998
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7854
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#members",
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8078
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8048
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8171
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8206
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8250
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8246
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8440
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8475
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8545
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8401
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8634
                                                }, this),
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8699
                                                }, this),
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8764
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8829
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8894
                                                }, this),
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8959
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[49].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9007
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9051
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8556
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9171
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9206
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9062
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9361
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9217
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9376
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelclosetopath",
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9441
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9578
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9372
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelautorotate",
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9658
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9759
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9794
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9589
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9949
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9805
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10034
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10104
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9960
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10189
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10115
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10414
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10569
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10425
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10584
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10654
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10724
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10580
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10879
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10735
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10894
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10929
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11034
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10890
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11045
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11204
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11475
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11481
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11363
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11640
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11492
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11799
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11651
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11958
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11810
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12081
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11969
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12276
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 7650
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 7446
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "members",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#members",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 12372
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 12320
                        }, this),
                        "members",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "members",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12772
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12641
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 12567
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 12422
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 12303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[131].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 13718
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[132].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 13752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[133].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 13814
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 13878
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 13934
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 13848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "labelclosetopath",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#labelclosetopath",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 14089
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 14028
                        }, this),
                        "labelCloseToPath",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "labelCloseToPath",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 14302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 14148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 14002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 15453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[136].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 15487
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[137].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 15549
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 15613
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[138].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 15669
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 15583
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "labelautorotate",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#labelautorotate",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 15822
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 15762
                        }, this),
                        "labelAutoRotate",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "labelAutoRotate",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16238
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16107
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 16033
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 15880
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 15737
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[139].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 17184
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[140].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 17218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[141].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 17280
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 17344
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 17400
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 17314
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "使用示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#使用示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 17531
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 17482
                        }, this),
                        "使用示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "使用示例",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 17925
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17794
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 17720
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 17578
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 17468
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基础-bubblesets",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础-bubblesets",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 18952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 18894
                        }, this),
                        "基础 BubbleSets",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础-BubbleSets",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 19364
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19233
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 19159
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 19008
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 18871
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[143].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 20310
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[144].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 20344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[145].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 20406
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 20470
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 20526
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 20440
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自定义-bubblesets-样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义-bubblesets-样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 20683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 20621
                        }, this),
                        "自定义 BubbleSets 样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义-BubbleSets-样式",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 21103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20972
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 20898
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 20743
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 20594
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[147].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 22049
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[148].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 22111
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 22175
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[149].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 22231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 22145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "标签配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#标签配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 22362
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 22313
                        }, this),
                        "标签配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "标签配置",
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 22756
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 22625
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 22551
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 22409
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 22299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[150].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 23702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[151].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 23736
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[152].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 23798
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 23862
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[153].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 23918
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 23832
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "实际案例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#实际案例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 24049
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 24000
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
                                        fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 24443
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 24312
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                                lineNumber: 23,
                                columnNumber: 24238
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 24096
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 23986
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 25419
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/BubbleSets.zh.md",
                            lineNumber: 23,
                            columnNumber: 25463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/BubbleSets.zh.md",
                    lineNumber: 23,
                    columnNumber: 25389
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/BubbleSets.zh.md",
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
                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/BubbleSets.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/BubbleSets.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/BubbleSets.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_BubbleSets_zh_md-async.js.map