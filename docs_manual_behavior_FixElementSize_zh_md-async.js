((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/FixElementSize.zh.md'],
{ "docs/manual/behavior/FixElementSize.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/fix-element-size.md?watch=parent");
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 1595
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1989
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1858
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 1784
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 1642
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 1532
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 2935
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[4].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                        lineNumber: 23,
                        columnNumber: 2971
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 3073
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 3024
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3467
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3336
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 3262
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 3120
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 3010
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 4443
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 4485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 4413
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 4614
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 4565
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 5008
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4877
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 4803
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 4661
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 4551
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 5954
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                        lineNumber: 23,
                        columnNumber: 5989
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 5986
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6035
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6067
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                        lineNumber: 23,
                        columnNumber: 6138
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6135
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6218
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 6348
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 6300
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6740
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6609
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 6535
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 6394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 6287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7704
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7739
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7844
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 7700
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 7693
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8012
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8008
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8056
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7899
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#enable",
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8165
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8252
                                                }, this),
                                                $$contentTexts[28].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8096
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8552
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8596
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8716
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8751
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8607
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8831
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8801
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8890
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8987
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8762
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9002
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9102
                                                }, this),
                                                $$contentTexts[47].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9239
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9283
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8998
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9363
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[52].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9422
                                                }, this),
                                                $$contentTexts[53].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9517
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9561
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9294
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9576
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%BE%B9%E6%95%B0%E6%8D%AEedgedata",
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9676
                                                }, this),
                                                $$contentTexts[59].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9804
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9848
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9572
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#node",
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9928
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#fixshapeconfig",
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9987
                                                }, this),
                                                $$contentTexts[65].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10084
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9859
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10099
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E7%BB%84%E5%90%88%E6%95%B0%E6%8D%AEcombodata",
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10199
                                                }, this),
                                                $$contentTexts[70].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10337
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10381
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10095
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 7892
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 7686
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 10475
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 10424
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 10873
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10742
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 10668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 10524
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 10408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[72].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 11819
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 11881
                        }, this),
                        $$contentTexts[75].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[76].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 11946
                        }, this),
                        $$contentTexts[77].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[78].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 12011
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 11852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "node",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 12117
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 12068
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 12306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 12164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 12054
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[80].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                        lineNumber: 23,
                        columnNumber: 13493
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13490
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13540
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13634
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "ts",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13667
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "fixshapeconfig",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fixshapeconfig",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 13811
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 13752
                        }, this),
                        "FixShapeConfig",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "FixShapeConfig",
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14225
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14094
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 14020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 13868
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 13728
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[85].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15189
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[86].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15224
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[87].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15259
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[88].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15294
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[89].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15329
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 15185
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 15178
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15388
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15528
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15384
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15712
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15568
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 15377
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 15171
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
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 15831
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 15782
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
                                        fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16225
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16094
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                                lineNumber: 23,
                                columnNumber: 16020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 15878
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 15768
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 17201
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[100].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/FixElementSize.zh.md",
                            lineNumber: 23,
                            columnNumber: 17245
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/FixElementSize.zh.md",
                    lineNumber: 23,
                    columnNumber: 17171
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/FixElementSize.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/FixElementSize.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/FixElementSize.zh.md",
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
//# sourceMappingURL=docs_manual_behavior_FixElementSize_zh_md-async.js.map