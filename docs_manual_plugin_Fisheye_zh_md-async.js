((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Fisheye.zh.md'],
{ "docs/manual/plugin/Fisheye.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/plugins/fisheye.md?watch=parent");
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 2872
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 2906
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 3008
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3402
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3271
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 3197
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 3055
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 2945
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 4348
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 4503
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4897
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4766
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 4692
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 4550
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 5873
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 5915
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 6042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6434
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6303
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 6229
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 6088
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7398
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7432
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7466
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7500
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7534
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 7394
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7702
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7746
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7589
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7930
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7786
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[21].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8010
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8042
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8107
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8139
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8204
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8236
                                                }, this),
                                                $$contentTexts[30].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8310
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8375
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8440
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8488
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8484
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8532
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7941
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8687
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8543
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8807
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8698
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8927
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8997
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8853
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9117
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9008
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9462
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9542
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9574
                                                }, this),
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9639
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9671
                                                }, this),
                                                $$contentTexts[68].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9745
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9810
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9889
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9473
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9969
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10001
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10066
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10098
                                                }, this),
                                                $$contentTexts[80].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10172
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10237
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9900
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10471
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10327
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[90].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style",
                                                    children: $$contentTexts[91].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10551
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10677
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10482
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10692
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/node/base-node#style",
                                                    children: $$contentTexts[96].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10766
                                                }, this),
                                                $$contentTexts[97].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[98].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10873
                                                }, this),
                                                $$contentTexts[99].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/element/node/base-node#style",
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11001
                                                }, this),
                                                $$contentTexts[101].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 11119
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11164
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10688
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11287
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 11323
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11175
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 7582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 11415
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 11365
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 11811
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11680
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 11606
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 11463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 11350
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[107].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 12757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12845
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12881
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12917
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 12805
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 12798
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 12977
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[115].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 13089
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13085
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12973
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 13255
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13251
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13139
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13345
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13417
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13305
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13570
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13458
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13723
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13611
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13876
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13764
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[138].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 13997
                                                }, this),
                                                $$contentTexts[139].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[140].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14064
                                                }, this),
                                                $$contentTexts[141].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[142].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14131
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 13993
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14176
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 13917
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[146].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14297
                                                }, this),
                                                $$contentTexts[147].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[148].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14364
                                                }, this),
                                                $$contentTexts[149].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[150].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 14431
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14476
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14217
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14629
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14517
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14674
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14746
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14782
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14670
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14935
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14823
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 14980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15088
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14976
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 12966
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 12791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[168].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/base-node#style",
                            children: $$contentTexts[169].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 15175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 15145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "缩放控制",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#缩放控制",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 15324
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 15275
                        }, this),
                        "缩放控制",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "缩放控制",
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15718
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15587
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 15513
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 15371
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 15261
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[170].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[171].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 16694
                        }, this),
                        $$contentTexts[172].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[173].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 16761
                        }, this),
                        $$contentTexts[174].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 16664
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[175].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 16832
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[176].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[177].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 16924
                        }, this),
                        $$contentTexts[178].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[179].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 16991
                        }, this),
                        $$contentTexts[180].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[181].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17058
                        }, this),
                        $$contentTexts[182].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[183].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17125
                        }, this),
                        $$contentTexts[184].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[185].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17192
                        }, this),
                        $$contentTexts[186].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[187].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17259
                        }, this),
                        $$contentTexts[188].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[189].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17326
                        }, this),
                        $$contentTexts[190].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[191].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17393
                        }, this),
                        $$contentTexts[192].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[193].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17460
                        }, this),
                        $$contentTexts[194].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[195].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17527
                        }, this),
                        $$contentTexts[196].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[197].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17594
                        }, this),
                        $$contentTexts[198].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 16894
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 17728
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17679
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 18122
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17991
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 17917
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 17775
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 17665
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 19131
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 19082
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 19525
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 19394
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 19320
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 19178
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 19068
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[199].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 20471
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[200].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 20505
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 20632
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 20582
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 21028
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20897
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 20823
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 20680
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 20567
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[201].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 21974
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[202].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 22008
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[203].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 22070
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 22134
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 22190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 22104
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
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 22321
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 22272
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
                                        fileName: "docs/manual/plugin/Fisheye.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 22715
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 22584
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Fisheye.zh.md",
                                lineNumber: 23,
                                columnNumber: 22510
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 22368
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 22258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 23691
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[205].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Fisheye.zh.md",
                            lineNumber: 23,
                            columnNumber: 23735
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Fisheye.zh.md",
                    lineNumber: 23,
                    columnNumber: 23661
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Fisheye.zh.md",
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
                fileName: "docs/manual/plugin/Fisheye.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Fisheye.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Fisheye.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Fisheye.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_Fisheye_zh_md-async.js.map