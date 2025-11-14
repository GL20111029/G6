((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceAtlas2Layout.zh.md'],
{ "docs/manual/layout/ForceAtlas2Layout.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/layout/force-atlas2.md?watch=parent");
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 2872
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 2906
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 2940
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 2868
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 3042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 2993
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3436
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3305
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 3231
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 3089
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 2979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 4412
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 4454
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 4382
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 4583
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 4534
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4977
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4846
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 4772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 4630
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 4520
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 5923
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 6044
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 5996
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6436
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6305
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 6231
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 6090
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 5983
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7400
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7434
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7468
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7502
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7536
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 7396
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 7389
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[12].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[13].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7660
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7708
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7752
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7787
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7591
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7866
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7901
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7971
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7827
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7982
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8281
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8137
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8296
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8361
                                                }, this),
                                                $$contentTexts[32].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8501
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8292
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8516
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8586
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8656
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8512
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8811
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8667
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8896
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8966
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8822
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9046
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9120
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9185
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9116
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9233
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9229
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9277
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8977
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9357
                                                }, this),
                                                $$contentTexts[58].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9497
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9288
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9508
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9732
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9797
                                                }, this),
                                                $$contentTexts[70].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9937
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10022
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10092
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9948
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10142
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10212
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10247
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10103
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10262
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10332
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10402
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10258
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[86].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[87].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10482
                                                }, this),
                                                $$contentTexts[88].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10587
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10622
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10413
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 7584
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 7382
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 10712
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 10663
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 11106
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10975
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 10901
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 10759
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 10649
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基础用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 12115
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 12066
                        }, this),
                        "基础用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础用法",
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12509
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12378
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 12304
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 12162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 12052
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[91].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 13455
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[92].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 13516
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 13579
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[93].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 13635
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 13549
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
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 13765
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 13716
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
                                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14159
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14028
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                                lineNumber: 23,
                                columnNumber: 13954
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 13812
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 13702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 15135
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[94].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 15179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 15105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples/layout/force-directed/#atlas2",
                            children: $$contentTexts[95].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                            lineNumber: 23,
                            columnNumber: 15254
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                        lineNumber: 23,
                        columnNumber: 15250
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                    lineNumber: 23,
                    columnNumber: 15246
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
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
                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ForceAtlas2Layout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_ForceAtlas2Layout_zh_md-async.js.map