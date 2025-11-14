((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/LassoSelect.zh.md'],
{ "docs/manual/behavior/LassoSelect.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/lasso-select.md?watch=parent");
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 1595
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 1546
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1989
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1858
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 1784
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 1642
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 1532
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 2935
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 2971
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 3005
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 2967
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 3107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 3058
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3501
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3370
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 3296
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 3154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 3044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4477
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4519
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 4447
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 4648
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4599
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 5042
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4911
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 4837
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 4695
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 4585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 5988
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                        lineNumber: 23,
                        columnNumber: 6023
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6101
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[11].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                        lineNumber: 23,
                        columnNumber: 6173
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6170
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6253
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 6383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 6335
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6775
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6644
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 6570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 6429
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 6322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7739
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7844
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7879
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 7735
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 7728
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8003
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8077
                                                }, this),
                                                $$contentTexts[24].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8151
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8195
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7934
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8239
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8379
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8235
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8494
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8670
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8390
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8685
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8785
                                                }, this),
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8850
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8915
                                                }, this),
                                                $$contentTexts[45].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9015
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9080
                                                }, this),
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9145
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8985
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9215
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8681
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#immediately",
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9234
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9326
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9402
                                                }, this),
                                                $$contentTexts[58].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9542
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9226
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#mode",
                                                children: $$contentTexts[61].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9561
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9655
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9720
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9785
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9850
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[70].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9898
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9894
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9942
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9553
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10027
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10068
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9953
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[76].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[77].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10183
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10248
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10313
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10378
                                                }, this),
                                                $$contentTexts[84].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10443
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10153
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10491
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10535
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10079
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10554
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "/manual/element/shape/properties",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10649
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[90].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10773
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10829
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10546
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[92].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[93].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10909
                                                }, this),
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[95].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                        lineNumber: 23,
                                                        columnNumber: 10982
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10978
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11189
                                                }, this),
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11254
                                                }, this),
                                                $$contentTexts[100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11320
                                                }, this),
                                                $$contentTexts[102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11387
                                                }, this),
                                                $$contentTexts[104].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11159
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[105].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[106].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11490
                                                }, this),
                                                $$contentTexts[107].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11459
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10840
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 7927
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 7721
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 11666
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 11610
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12074
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11943
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 11869
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 11720
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 11589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[108].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[109].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13050
                        }, this),
                        $$contentTexts[110].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[111].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13121
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13213
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[112].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13269
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13183
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 13400
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13351
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13794
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13663
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 13589
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 13447
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 13337
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[113].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 14740
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[114].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14782
                                }, this),
                                $$contentTexts[115].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 14778
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[116].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14858
                                }, this),
                                $$contentTexts[117].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 14854
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[118].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14934
                                }, this),
                                $$contentTexts[119].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 14930
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[120].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15010
                                }, this),
                                $$contentTexts[121].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15006
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 14774
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[122].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15087
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15179
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[123].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15221
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15149
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 15354
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15304
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15750
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15619
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 15545
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 15402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 15289
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[124].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16714
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[125].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16750
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[126].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16786
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[127].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16822
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 16710
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 16703
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16990
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16878
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17041
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17077
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 17117
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17001
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17171
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17207
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17167
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17396
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17432
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17320
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17555
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17443
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17606
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17646
                                                }, this),
                                                $$contentTexts[148].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[149].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17713
                                                }, this),
                                                $$contentTexts[150].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[151].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17780
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17825
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17566
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17948
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17836
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18071
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17959
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[160].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18162
                                                }, this),
                                                $$contentTexts[161].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[162].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18229
                                                }, this),
                                                $$contentTexts[163].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[164].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18296
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18341
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18082
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18428
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18464
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18352
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18581
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18617
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18505
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18740
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18628
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18863
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18751
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18950
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18986
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18874
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19001
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19109
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18997
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19232
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19120
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[190].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 19359
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19355
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19243
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19521
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19409
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[196].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19612
                                                }, this),
                                                $$contentTexts[197].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[198].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19679
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19724
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19532
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19775
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19811
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 19847
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19735
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 16871
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 16696
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[203].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 19907
                        }, this),
                        $$contentTexts[204].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 19904
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[205].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 19982
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20074
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "trigger",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#trigger",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 20267
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20215
                        }, this),
                        "trigger",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "trigger",
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 20667
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20536
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 20462
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 20317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 20198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[207].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[208].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21643
                        }, this),
                        $$contentTexts[209].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 21613
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[210].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[211].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21748
                        }, this),
                        $$contentTexts[212].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21815
                        }, this),
                        $$contentTexts[214].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[215].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21882
                        }, this),
                        $$contentTexts[216].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 21718
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
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 22016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 21967
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
                                        fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 22410
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 22279
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                                lineNumber: 23,
                                columnNumber: 22205
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 22063
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 21953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 23386
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[217].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.zh.md",
                            lineNumber: 23,
                            columnNumber: 23430
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.zh.md",
                    lineNumber: 23,
                    columnNumber: 23356
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/LassoSelect.zh.md",
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
                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/LassoSelect.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/LassoSelect.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/LassoSelect.zh.md",
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
//# sourceMappingURL=docs_manual_behavior_LassoSelect_zh_md-async.js.map