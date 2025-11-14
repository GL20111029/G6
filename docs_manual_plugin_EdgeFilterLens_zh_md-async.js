((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/EdgeFilterLens.zh.md'],
{ "docs/manual/plugin/EdgeFilterLens.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/plugins/edge-filter-lens.md?watch=parent");
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 2872
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 2906
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 2868
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 3008
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 2959
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3402
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3271
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 3197
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 3055
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 2945
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 4348
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 4380
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 4503
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 4454
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4897
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4766
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 4692
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 4550
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 4440
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 5873
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 5915
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 5843
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 6042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 5994
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6434
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6303
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 6229
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 6088
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 5981
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7398
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7432
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7466
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7500
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7534
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 7394
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 7387
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7702
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7746
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7589
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7930
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7786
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[21].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8010
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8042
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8107
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8139
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8204
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8236
                                                }, this),
                                                $$contentTexts[30].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8310
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8375
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8440
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8488
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8484
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8532
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7941
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8687
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8543
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8807
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8698
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8927
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8997
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8853
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9077
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9151
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9230
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9008
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9310
                                                }, this),
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9342
                                                }, this),
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9407
                                                }, this),
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9439
                                                }, this),
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9504
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9536
                                                }, this),
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9601
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9633
                                                }, this),
                                                $$contentTexts[68].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9707
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9772
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9837
                                                }, this),
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[75].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9902
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[76].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9950
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9946
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9994
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9241
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10109
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10174
                                                }, this),
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10239
                                                }, this),
                                                $$contentTexts[85].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10344
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10005
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[88].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style",
                                                    children: $$contentTexts[89].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10424
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10521
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10355
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/node/base-node#style",
                                                    children: $$contentTexts[93].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10610
                                                }, this),
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[95].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10717
                                                }, this),
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/node/base-node#style",
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10845
                                                }, this),
                                                $$contentTexts[98].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10606
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 10961
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11005
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10532
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11020
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/edge/base-edge#style",
                                                    children: $$contentTexts[102].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11096
                                                }, this),
                                                $$contentTexts[103].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%BE%B9%E6%95%B0%E6%8D%AEedgedata",
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11205
                                                }, this),
                                                $$contentTexts[105].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/edge/base-edge#style",
                                                    children: $$contentTexts[106].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11326
                                                }, this),
                                                $$contentTexts[107].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11092
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[108].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 11444
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11440
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11489
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11016
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11576
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11648
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11500
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 7582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 7380
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 11740
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 11690
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12005
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 11931
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 11788
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 11675
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[113].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 13082
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[114].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13134
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[115].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13170
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[116].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13206
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[117].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 13242
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 13130
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 13123
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13338
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[121].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 13414
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13410
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13298
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 13580
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13464
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13742
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13630
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13895
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13783
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13936
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14093
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14201
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14089
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[144].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14322
                                                }, this),
                                                $$contentTexts[145].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[146].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14389
                                                }, this),
                                                $$contentTexts[147].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[148].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14456
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14318
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14501
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14242
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[152].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14622
                                                }, this),
                                                $$contentTexts[153].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[154].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14689
                                                }, this),
                                                $$contentTexts[155].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[156].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14756
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14618
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14801
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14542
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14954
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14842
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15107
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14995
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15260
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15413
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15301
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 13291
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 13116
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[174].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/base-node#style",
                            children: $$contentTexts[175].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 15500
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 15470
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 15649
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 15600
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 16043
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15912
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 15838
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 15696
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 15586
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 17052
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 17003
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 17446
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17315
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 17241
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 17099
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 16989
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[176].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 18392
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[177].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 18426
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[178].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 18488
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 18552
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[179].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 18608
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 18522
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自定义样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 18741
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 18691
                        }, this),
                        "自定义样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义样式",
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 19137
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19006
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 18932
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 18789
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 18676
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[180].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 20083
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[181].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 20117
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[182].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 20179
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 20243
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[183].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 20299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 20213
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
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 20430
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 20381
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
                                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 20824
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20693
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                                lineNumber: 23,
                                columnNumber: 20619
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 20477
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 20367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples/plugin/edge-filter-lens/#basic",
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                            lineNumber: 23,
                            columnNumber: 21778
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                        lineNumber: 23,
                        columnNumber: 21774
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                    lineNumber: 23,
                    columnNumber: 21770
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
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
                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/EdgeFilterLens.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_EdgeFilterLens_zh_md-async.js.map