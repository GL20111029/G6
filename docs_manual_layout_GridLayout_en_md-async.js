((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/GridLayout.en.md'],
{ "docs/manual/layout/GridLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
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
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[1].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/GridLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 2916
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "online-demo",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#online-demo",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3032
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2976
                        }, this),
                        "Online Demo",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Online-Demo",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3440
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3309
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3235
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3086
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2955
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4416
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4458
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4386
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4605
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4547
                        }, this),
                        "Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5017
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4886
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4812
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4661
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4524
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5963
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6092
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6040
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6492
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6361
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6287
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6023
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7456
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7490
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7524
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7558
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7592
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7445
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7650
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[11].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/GridLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7723
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7767
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7802
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7646
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[15].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[16].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7911
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7955
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8025
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7842
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8180
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8036
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8191
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8490
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8346
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8645
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8501
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8695
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8765
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8800
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8656
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8955
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8811
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9110
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8966
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9265
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9121
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9420
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9276
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9431
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9695
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/GridLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9730
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9586
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7639
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7438
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "preventoverlap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#preventoverlap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9840
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9781
                        }, this),
                        "preventOverlap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "preventOverlap",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10254
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10123
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10049
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9897
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[63].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11215
                            }, this),
                            $$contentTexts[64].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[65].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11276
                            }, this),
                            $$contentTexts[66].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[67].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11345
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/GridLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11212
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11200
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[68].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11401
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[69].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "preventoverlappadding",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#preventoverlappadding",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11564
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11498
                        }, this),
                        "preventOverlapPadding",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "preventOverlapPadding",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11992
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11861
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11628
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[70].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12953
                            }, this),
                            $$contentTexts[71].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[72].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13014
                            }, this),
                            $$contentTexts[73].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[74].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13083
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/GridLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 12950
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12938
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[75].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13139
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "sortby",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#sortby",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13188
                        }, this),
                        "sortBy",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "sortBy",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13637
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13506
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13432
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13288
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13172
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[76].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14598
                            }, this),
                            $$contentTexts[77].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[78].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14659
                            }, this),
                            $$contentTexts[79].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[80].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14728
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/GridLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 14595
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14583
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14784
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "code-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#code-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14898
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14840
                        }, this),
                        "Code Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Code-Examples",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15310
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15179
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14954
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14817
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-usage",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16333
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16277
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16741
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16610
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16536
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16387
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16256
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17687
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17720
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17781
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17844
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17900
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17814
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custom-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18062
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17997
                        }, this),
                        "Custom Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Configuration",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18488
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18357
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18283
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[87].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19528
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19591
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[89].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19647
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19561
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "specify-node-position",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#specify-node-position",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19811
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19745
                        }, this),
                        "Specify Node Position",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Specify-Node-Position",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20239
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20108
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20034
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19875
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[90].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[91].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21214
                        }, this),
                        $$contentTexts[92].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[93].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21283
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[94].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21407
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[95].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21377
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "real-cases",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#real-cases",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21605
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21550
                        }, this),
                        "Real Cases",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Real-Cases",
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
                                        fileName: "docs/manual/layout/GridLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22011
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/GridLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21880
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/GridLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21806
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21658
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21530
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples/layout/grid/#basic",
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/GridLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22965
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/GridLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 22961
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/GridLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22957
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/GridLayout.en.md",
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
                fileName: "docs/manual/layout/GridLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/GridLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/GridLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/GridLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_GridLayout_en_md-async.js.map