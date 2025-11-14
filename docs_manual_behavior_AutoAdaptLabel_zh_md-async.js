((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/AutoAdaptLabel.zh.md'],
{ "docs/manual/behavior/AutoAdaptLabel.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/auto-adapt-label.md?watch=parent");
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 2904
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 2938
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 3040
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3434
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3303
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 3229
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 3087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 4410
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 4452
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 4581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 4975
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 4844
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 4770
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 4628
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 4518
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 5921
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                        lineNumber: 23,
                        columnNumber: 5956
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 5953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 6002
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 6034
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[9].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                        lineNumber: 23,
                        columnNumber: 6105
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 6102
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 6151
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 6314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6706
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6575
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 6501
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 6360
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7670
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7705
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7740
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7775
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 7810
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 7666
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[20].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7978
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8022
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7865
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8166
                                                }, this),
                                                $$contentTexts[26].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8342
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8062
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8497
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8353
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8508
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8778
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#nodecentralityoptions",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8858
                                                }, this),
                                                $$contentTexts[42].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[43].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8951
                                                }, this),
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9016
                                                }, this),
                                                $$contentTexts[46].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#nodecentralityoptions",
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9090
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9183
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[51].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9320
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9364
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8789
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[53].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9444
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9509
                                                }, this),
                                                $$contentTexts[57].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E8%BE%B9%E6%95%B0%E6%8D%AEedgedata",
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9609
                                                }, this),
                                                $$contentTexts[60].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9739
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9375
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9754
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9819
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9884
                                                }, this),
                                                $$contentTexts[66].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/data#%E7%BB%84%E5%90%88%E6%95%B0%E6%8D%AEcombodata",
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9984
                                                }, this),
                                                $$contentTexts[69].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 10124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9750
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 7858
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 7652
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodecentralityoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodecentralityoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 10248
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 10182
                        }, this),
                        "NodeCentralityOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "NodeCentralityOptions",
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 10676
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10545
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 10471
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 10312
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 10151
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[70].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 11622
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[71].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11663
                                }, this),
                                $$contentTexts[72].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 11659
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[73].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11737
                                }, this),
                                $$contentTexts[74].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 11733
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[75].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11811
                                }, this),
                                $$contentTexts[76].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 11807
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11885
                                }, this),
                                $$contentTexts[78].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 11881
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[79].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11959
                                }, this),
                                $$contentTexts[80].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 11955
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 11655
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 12034
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
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 12166
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 12117
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
                                        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 12560
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 12429
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                                lineNumber: 23,
                                columnNumber: 12355
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 12213
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 12103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 13536
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[82].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                            lineNumber: 23,
                            columnNumber: 13580
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                    lineNumber: 23,
                    columnNumber: 13506
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/AutoAdaptLabel.zh.md",
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
//# sourceMappingURL=docs_manual_behavior_AutoAdaptLabel_zh_md-async.js.map