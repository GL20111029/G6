((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Tooltip.zh.md'],
{ "docs/manual/plugin/Tooltip.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
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
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 1528
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1791
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 1717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 1575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2876
                                }, this),
                                $$contentTexts[2].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 2872
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2952
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 2948
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3028
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 3024
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 2868
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "基本使用",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本使用",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 3168
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 3119
                        }, this),
                        "基本使用",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本使用",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3562
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3431
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 3357
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 3215
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 3105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 4508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 4540
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
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 4661
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 4613
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5053
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4922
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 4848
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 4707
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 4600
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6017
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6051
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6086
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6121
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 6013
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 6006
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6250
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6324
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6368
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6211
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6408
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6641
                                                }, this),
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6706
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6771
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6836
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6901
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6966
                                                }, this),
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7031
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7096
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6637
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7144
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7140
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6563
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7303
                                                }, this),
                                                $$contentTexts[45].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7479
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7199
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7529
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7594
                                                }, this),
                                                $$contentTexts[51].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7735
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7770
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7490
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7785
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7820
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7781
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8014
                                                }, this),
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8079
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[62].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8127
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8171
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7936
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8182
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8376
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8481
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8337
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8601
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8492
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8721
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8791
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8647
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8946
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8802
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 6204
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 5999
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "详细配置说明",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#详细配置说明",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 9040
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 8989
                        }, this),
                        "详细配置说明",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "详细配置说明",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9438
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9307
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 9233
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 9089
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 8973
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enable---条件启用",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enable---条件启用",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 10465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 10407
                        }, this),
                        "enable - 条件启用",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enable---条件启用",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10877
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10746
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 10672
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 10521
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 10384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 11823
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[84].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 11859
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 11856
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 11936
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 11980
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 11906
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getcontent---自定义内容",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getcontent---自定义内容",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 12138
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 12075
                        }, this),
                        "getContent - 自定义内容",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getContent---自定义内容",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12560
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12429
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 12355
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 12199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 12047
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 13506
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 13542
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 13539
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 13619
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[88].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 13663
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 13589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "trigger---触发方式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#trigger---触发方式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 13813
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 13754
                        }, this),
                        "trigger - 触发方式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "trigger---触发方式",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14227
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14096
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 14022
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 13870
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 13730
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15173
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[90].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 15209
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15206
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[91].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15264
                                }, this),
                                $$contentTexts[92].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15260
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[93].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15338
                                }, this),
                                $$contentTexts[94].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15334
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15256
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[95].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 15416
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15413
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15493
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15537
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15463
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "position---显示位置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#position---显示位置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 15689
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15629
                        }, this),
                        "position - 显示位置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "position---显示位置",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16105
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15974
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 15900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 15747
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 15604
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[97].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17051
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 17087
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17084
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[99].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17142
                                }, this),
                                $$contentTexts[100].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17138
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17217
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17213
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[103].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17293
                                }, this),
                                $$contentTexts[104].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17289
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[105].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17369
                                }, this),
                                $$contentTexts[106].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17365
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[107].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17445
                                }, this),
                                $$contentTexts[108].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17441
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[109].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17521
                                }, this),
                                $$contentTexts[110].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17517
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[111].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17597
                                }, this),
                                $$contentTexts[112].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17593
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17673
                                }, this),
                                $$contentTexts[114].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17669
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17134
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[115].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                        lineNumber: 21,
                        columnNumber: 17753
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17750
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17831
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17875
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "offset---偏移量",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#offset---偏移量",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 18022
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 17965
                        }, this),
                        "offset - 偏移量",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "offset---偏移量",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18432
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18301
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 18227
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 18077
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 17943
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[117].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 19378
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 19442
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 19486
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 19412
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enterable---鼠标可进入",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enterable---鼠标可进入",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 19643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 19581
                        }, this),
                        "enterable - 鼠标可进入",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enterable---鼠标可进入",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20063
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19932
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 19858
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 19703
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 19554
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[119].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 21009
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 21073
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 21117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 21043
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "style---样式自定义",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style---样式自定义",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 21266
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 21208
                        }, this),
                        "style - 样式自定义",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "style---样式自定义",
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21678
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21547
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 21473
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 21322
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 21185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[121].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 22624
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 22688
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 22732
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 22658
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
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 22863
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 22814
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
                                        fileName: "docs/manual/plugin/Tooltip.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23257
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23126
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 23052
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 22910
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 22800
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/plugin/tooltip/#basic",
                                children: $$contentTexts[123].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 24211
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 24207
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/plugin/tooltip/#click",
                                children: $$contentTexts[124].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 24297
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 24293
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/plugin/tooltip/#dual",
                                children: $$contentTexts[125].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 24383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 24379
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/plugin/tooltip/#custom-style",
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 24468
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 24464
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/examples/plugin/tooltip/#async",
                                children: $$contentTexts[127].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.zh.md",
                                lineNumber: 21,
                                columnNumber: 24561
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.zh.md",
                            lineNumber: 21,
                            columnNumber: 24557
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.zh.md",
                    lineNumber: 21,
                    columnNumber: 24203
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Tooltip.zh.md",
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
                fileName: "docs/manual/plugin/Tooltip.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Tooltip.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Tooltip.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Tooltip.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_Tooltip_zh_md-async.js.map