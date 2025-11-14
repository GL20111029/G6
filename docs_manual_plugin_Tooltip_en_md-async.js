((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Tooltip.en.md'],
{ "docs/manual/plugin/Tooltip.en.md": function (module, exports, __mako_require__){
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
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 56
                        }, this),
                        "Overview",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "use-cases",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#use-cases",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 1562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 1508
                        }, this),
                        "Use Cases",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Use-Cases",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 1614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2920
                                }, this),
                                $$contentTexts[2].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 2916
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2996
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 2992
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3072
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 3068
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 2912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "basic-usage",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 3226
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 3170
                        }, this),
                        "Basic Usage",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Usage",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3634
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3503
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 3429
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 3280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 3149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 4580
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 4612
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 4769
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 4703
                        }, this),
                        "Configuration Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration-Options",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5197
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5066
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 4992
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 4833
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 4672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6161
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6195
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6230
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6265
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6300
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 6157
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 6150
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6468
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6355
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6591
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6626
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6661
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6696
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6552
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6711
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6746
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6785
                                                }, this),
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6850
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6915
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6980
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7045
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7110
                                                }, this),
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7175
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7240
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7288
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6707
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7447
                                                }, this),
                                                $$contentTexts[45].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7595
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7343
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7710
                                                }, this),
                                                $$contentTexts[51].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7680
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7858
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7606
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7908
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7978
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8013
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7869
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8102
                                                }, this),
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8167
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[62].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8215
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8024
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8414
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8569
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8425
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8584
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8654
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8724
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8580
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8879
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8735
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8894
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8929
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Tooltip.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9034
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8890
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 6348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 6143
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "detailed-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#detailed-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 9160
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 9093
                        }, this),
                        "Detailed Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Detailed-Configuration",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9590
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9459
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 9385
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 9225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 9061
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enable---conditional-enable",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enable---conditional-enable",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 10645
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 10573
                        }, this),
                        "enable - Conditional Enable",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enable---Conditional-Enable",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11085
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10954
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 10880
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 10715
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 10536
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 12031
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[84].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 12067
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 12064
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 12144
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 12188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 12114
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getcontent---custom-content",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getcontent---custom-content",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 12364
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 12292
                        }, this),
                        "getContent - Custom Content",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getContent---Custom-Content",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12804
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12673
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 12599
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 12434
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 12255
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 13750
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 13786
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 13783
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 13863
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[88].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 13907
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 13833
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "trigger---trigger-mode",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#trigger---trigger-mode",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 14073
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 14006
                        }, this),
                        "trigger - Trigger Mode",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "trigger---Trigger-Mode",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14503
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 14298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 14138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 13974
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[90].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 15485
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15482
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[91].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15540
                                }, this),
                                $$contentTexts[92].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 15536
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[93].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15614
                                }, this),
                                $$contentTexts[94].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 15610
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15532
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[95].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 15692
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15689
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 15769
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 15813
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15739
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "position---display-position",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#position---display-position",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 15989
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 15917
                        }, this),
                        "position - Display Position",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "position---Display-Position",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16429
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16298
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 16224
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 16059
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 15880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[97].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 17375
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 17411
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 17408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[99].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17466
                                }, this),
                                $$contentTexts[100].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17462
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17541
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17537
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[103].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17617
                                }, this),
                                $$contentTexts[104].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17613
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[105].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17693
                                }, this),
                                $$contentTexts[106].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17689
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[107].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17769
                                }, this),
                                $$contentTexts[108].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17765
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[109].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17845
                                }, this),
                                $$contentTexts[110].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17841
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[111].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17921
                                }, this),
                                $$contentTexts[112].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17917
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17997
                                }, this),
                                $$contentTexts[114].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 17993
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 17458
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[115].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Tooltip.en.md",
                        lineNumber: 21,
                        columnNumber: 18077
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 18074
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 18155
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 18199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 18125
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "offset---offset",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#offset---offset",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 18352
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 18292
                        }, this),
                        "offset - Offset",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "offset---Offset",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18768
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18637
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 18563
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 18410
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 18267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[117].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 19714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 19778
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 19822
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 19748
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "enterable---mouse-enterable",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#enterable---mouse-enterable",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 19999
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 19927
                        }, this),
                        "enterable - Mouse Enterable",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "enterable---Mouse-Enterable",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20439
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20308
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 20234
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 20069
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 19890
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[119].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 21385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 21449
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 21493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 21419
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "style---style-customization",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style---style-customization",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 21670
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 21598
                        }, this),
                        "style - Style Customization",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "style---Style-Customization",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21979
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 21905
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 21740
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 21561
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[121].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 23056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 23120
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 23164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 23090
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "practical-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#practical-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 23323
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 23260
                        }, this),
                        "Practical Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Practical-Examples",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23745
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23614
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 23540
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 23384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 23232
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/examples/plugin/tooltip/#basic",
                                children: $$contentTexts[123].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 24699
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 24695
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/examples/plugin/tooltip/#click",
                                children: $$contentTexts[124].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 24788
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 24784
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/examples/plugin/tooltip/#dual",
                                children: $$contentTexts[125].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 24877
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 24873
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/examples/plugin/tooltip/#custom-style",
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 24965
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 24961
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/examples/plugin/tooltip/#async",
                                children: $$contentTexts[127].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 25061
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 25057
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 24691
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 25212
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 25164
                        }, this),
                        "API",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API",
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
                                        fileName: "docs/manual/plugin/Tooltip.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25604
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Tooltip.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25473
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Tooltip.en.md",
                                lineNumber: 21,
                                columnNumber: 25399
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Tooltip.en.md",
                            lineNumber: 21,
                            columnNumber: 25258
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Tooltip.en.md",
                    lineNumber: 21,
                    columnNumber: 25151
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Tooltip.en.md",
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
                fileName: "docs/manual/plugin/Tooltip.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Tooltip.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Tooltip.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Tooltip.en.md",
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
//# sourceMappingURL=docs_manual_plugin_Tooltip_en_md-async.js.map