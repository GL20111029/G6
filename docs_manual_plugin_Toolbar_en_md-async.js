((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Toolbar.en.md'],
{ "docs/manual/plugin/Toolbar.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 1562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 1614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 2912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[2].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/Toolbar.en.md",
                        lineNumber: 21,
                        columnNumber: 2948
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 2944
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 3064
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 3008
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3472
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3341
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 3267
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 3118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 2987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 4418
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 4450
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 4607
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 4541
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5035
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4904
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 4830
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 4671
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 4510
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5999
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6033
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6067
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6101
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6135
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 5995
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 5988
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6302
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6346
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6189
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6530
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6386
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6650
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6685
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6541
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#position",
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6765
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6735
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[27].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6863
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6907
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6696
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[29].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style-attributes",
                                                    children: $$contentTexts[30].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6987
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration",
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7058
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7207
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6918
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#toolbaritem",
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7322
                                                }, this),
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#toolbaritem",
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7405
                                                }, this),
                                                $$contentTexts[39].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7528
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7218
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7712
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7568
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 6182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 5981
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "position",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#position",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 7810
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 7757
                        }, this),
                        "position",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "position",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8212
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8081
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 8007
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 7861
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 7739
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[46].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[47].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9187
                        }, this),
                        $$contentTexts[48].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 9158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[49].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9264
                                }, this),
                                $$contentTexts[50].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9260
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9338
                                }, this),
                                $$contentTexts[52].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9334
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9412
                                }, this),
                                $$contentTexts[54].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9408
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9486
                                }, this),
                                $$contentTexts[56].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9482
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9560
                                }, this),
                                $$contentTexts[58].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9556
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9634
                                }, this),
                                $$contentTexts[60].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9630
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[61].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9708
                                }, this),
                                $$contentTexts[62].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9704
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[63].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9782
                                }, this),
                                $$contentTexts[64].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9778
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 9256
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "style-attributes",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style-attributes",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 9944
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 9883
                        }, this),
                        "style Attributes",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "style-Attributes",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10362
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10231
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 10157
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 10003
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 9857
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11326
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11361
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11396
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11431
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 11322
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 11315
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11490
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11525
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[72].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 11599
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11595
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11486
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[76].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 11761
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11757
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11648
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11884
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[80].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 11923
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11919
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11810
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12011
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[84].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 12085
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12081
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11972
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12138
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 12247
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12243
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12134
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12370
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12405
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12296
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12484
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[96].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 12558
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12554
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12445
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[100].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 12720
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12716
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12607
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 11479
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 11308
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "toolbaritem",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#toolbaritem",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 12863
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 12807
                        }, this),
                        "ToolbarItem",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ToolbarItem",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13271
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13140
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 13066
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 12917
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 12786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[101].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 14217
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14269
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14305
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14341
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 14265
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 14258
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[107].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#built-in-icons",
                                                    children: $$contentTexts[108].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14504
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[109].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 14574
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14619
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14433
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[113].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                                lineNumber: 21,
                                                columnNumber: 14740
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14736
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14785
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 14426
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 14251
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "built-in-icons",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#built-in-icons",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 14925
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 14866
                        }, this),
                        "Built-in Icons",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Built-in-Icons",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15339
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15208
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 15134
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 14982
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 14842
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[115].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 16285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[116].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16327
                                }, this),
                                $$contentTexts[117].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16323
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[118].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16403
                                }, this),
                                $$contentTexts[119].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16399
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[120].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16479
                                }, this),
                                $$contentTexts[121].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16475
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[122].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16555
                                }, this),
                                $$contentTexts[123].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16551
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[124].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16631
                                }, this),
                                $$contentTexts[125].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16627
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[126].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16707
                                }, this),
                                $$contentTexts[127].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16703
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[128].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16783
                                }, this),
                                $$contentTexts[129].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16779
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[130].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16859
                                }, this),
                                $$contentTexts[131].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16855
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[132].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16935
                                }, this),
                                $$contentTexts[133].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 16931
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[134].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17011
                                }, this),
                                $$contentTexts[135].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 17007
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[136].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17087
                                }, this),
                                $$contentTexts[137].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 17083
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 16319
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custom-icons",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-icons",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 17243
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 17186
                        }, this),
                        "Custom Icons",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Icons",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17653
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17522
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 17448
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 17298
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 17164
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 18599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[139].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 18633
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[140].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[141].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 18737
                            }, this),
                            $$contentTexts[142].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/Toolbar.en.md",
                        lineNumber: 21,
                        columnNumber: 18707
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 18695
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 18902
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 18844
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19314
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19183
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 19109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 18958
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 18821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-toolbar",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-toolbar",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 20341
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 20283
                        }, this),
                        "Basic Toolbar",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Toolbar",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20753
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20622
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 20548
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 20397
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 20260
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[143].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 21699
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custom-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 21842
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 21784
                        }, this),
                        "Custom Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Styles",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22254
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22123
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 22049
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 21898
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 21761
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[144].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 23200
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[145].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 23274
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23316
                                        }, this),
                                        $$contentTexts[147].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23312
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23392
                                        }, this),
                                        $$contentTexts[149].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23388
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23468
                                        }, this),
                                        $$contentTexts[151].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23535
                                        }, this),
                                        $$contentTexts[153].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23602
                                        }, this),
                                        $$contentTexts[155].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23464
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23678
                                        }, this),
                                        $$contentTexts[157].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23674
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23754
                                        }, this),
                                        $$contentTexts[159].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23750
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23830
                                        }, this),
                                        $$contentTexts[161].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23826
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23906
                                        }, this),
                                        $$contentTexts[163].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23902
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23982
                                        }, this),
                                        $$contentTexts[165].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24049
                                        }, this),
                                        $$contentTexts[167].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23978
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24125
                                        }, this),
                                        $$contentTexts[169].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24121
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/Toolbar.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24201
                                        }, this),
                                        $$contentTexts[171].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 23308
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 23262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[172].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[173].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 24321
                        }, this),
                        $$contentTexts[174].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[175].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 24388
                        }, this),
                        $$contentTexts[176].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 24291
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "asynchronous-loading-of-toolbar-items",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#asynchronous-loading-of-toolbar-items",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 24588
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 24506
                        }, this),
                        "Asynchronous Loading of Toolbar Items",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Asynchronous-Loading-of-Toolbar-Items",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25048
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24917
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 24843
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 24668
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 24459
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[177].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 25994
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "common-issues",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#common-issues",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 26137
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 26079
                        }, this),
                        "Common Issues",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Common-Issues",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26549
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26418
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 26344
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 26193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 26056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "1-toolbar-icons-not-displaying",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-toolbar-icons-not-displaying",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 27610
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 27535
                        }, this),
                        "1. Toolbar icons not displaying?",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-Toolbar-icons-not-displaying?",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28060
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27929
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 27855
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 27685
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 27495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 29010
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[179].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 29046
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 29006
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "2-how-to-use-with-other-plugins",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#2-how-to-use-with-other-plugins",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 29204
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 29128
                        }, this),
                        "2. How to use with other plugins?",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "2.-How-to-use-with-other-plugins?",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29656
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29525
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 29451
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 29280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 29087
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[180].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 30602
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[181].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 30636
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "3-how-to-dynamically-update-the-toolbar",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#3-how-to-dynamically-update-the-toolbar",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 30831
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 30747
                        }, this),
                        "3. How to dynamically update the toolbar?",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "3.-How-to-dynamically-update-the-toolbar?",
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31299
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31168
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 31094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 30915
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 30698
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[182].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[183].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 32275
                        }, this),
                        $$contentTexts[184].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 32245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[185].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 32346
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
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 32483
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 32428
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
                                        fileName: "docs/manual/plugin/Toolbar.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32889
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/Toolbar.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32758
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/Toolbar.en.md",
                                lineNumber: 21,
                                columnNumber: 32684
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 32536
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 32408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 33865
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/Toolbar.en.md",
                            lineNumber: 21,
                            columnNumber: 33909
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/Toolbar.en.md",
                    lineNumber: 21,
                    columnNumber: 33835
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/Toolbar.en.md",
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
                fileName: "docs/manual/plugin/Toolbar.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/Toolbar.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/Toolbar.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/Toolbar.en.md",
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
//# sourceMappingURL=docs_manual_plugin_Toolbar_en_md-async.js.map