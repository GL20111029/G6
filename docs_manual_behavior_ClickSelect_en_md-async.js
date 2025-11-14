((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/ClickSelect.en.md'],
{ "docs/manual/behavior/ClickSelect.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/click-element.md?watch=parent");
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
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "usage-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#usage-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 1574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 1514
                        }, this),
                        "Usage Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Usage-Scenarios",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 1990
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 1859
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 1785
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 1632
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 2936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 2972
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 3006
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 3040
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 2968
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "online-experience",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#online-experience",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 3168
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 3106
                        }, this),
                        "Online Experience",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Online-Experience",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 3588
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 3457
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 3383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 3228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 3079
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 4564
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 4606
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 4534
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
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 4749
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 4693
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 5157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 5026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 4952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 4803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 4672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                        lineNumber: 26,
                        columnNumber: 6138
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6135
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6184
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6216
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                        lineNumber: 26,
                        columnNumber: 6287
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6284
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6334
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6367
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
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 6533
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 6467
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 6961
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 6830
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 6756
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 6597
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 6436
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 7925
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 7960
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 7995
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 8030
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 8065
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 7921
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 7914
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[19].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[20].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8189
                                                }, this),
                                                $$contentTexts[21].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8159
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8263
                                                }, this),
                                                $$contentTexts[23].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                lineNumber: 26,
                                                columnNumber: 8337
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8381
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 8120
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8530
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8565
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 8421
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#degree",
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8645
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8732
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8880
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 8576
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#enable",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 8960
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 8930
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9047
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9195
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 8891
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9350
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 9206
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9465
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9530
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9595
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9660
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9725
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                lineNumber: 26,
                                                columnNumber: 9773
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9817
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 9361
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9832
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#neighborstate",
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9897
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 9991
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10056
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10121
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10186
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10251
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 9961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[74].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                lineNumber: 26,
                                                columnNumber: 10299
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10295
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10343
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 9828
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[76].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#unselectedState",
                                                    children: $$contentTexts[77].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10423
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10519
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10584
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10649
                                                }, this),
                                                $$contentTexts[84].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10714
                                                }, this),
                                                $$contentTexts[86].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[87].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10779
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10489
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10829
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 10354
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10844
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[90].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[91].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 10944
                                                }, this),
                                                $$contentTexts[92].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 10914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11063
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 10840
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[95].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                        lineNumber: 26,
                                                        columnNumber: 11147
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11143
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11354
                                                }, this),
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11419
                                                }, this),
                                                $$contentTexts[100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11485
                                                }, this),
                                                $$contentTexts[102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                    lineNumber: 26,
                                                    columnNumber: 11552
                                                }, this),
                                                $$contentTexts[104].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[105].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                                lineNumber: 26,
                                                columnNumber: 11628
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                                            lineNumber: 26,
                                            columnNumber: 11673
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 11074
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 8113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 7907
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "degree",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#degree",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 11767
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 11716
                        }, this),
                        "degree",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "degree",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 26,
                                        columnNumber: 12165
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 12034
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 11960
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 11816
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 11700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[106].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 13111
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[107].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[108].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 13180
                                }, this),
                                $$contentTexts[109].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[110].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 13247
                                }, this),
                                $$contentTexts[111].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 13149
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[112].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 13350
                                }, this),
                                $$contentTexts[114].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[115].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 26,
                                    columnNumber: 13417
                                }, this),
                                $$contentTexts[116].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 26,
                            columnNumber: 13319
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 13145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[117].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[118].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 13536
                            }, this),
                            $$contentTexts[119].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#E4504D"
                                },
                                children: $$contentTexts[120].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 26,
                                columnNumber: 13603
                            }, this),
                            $$contentTexts[121].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[122].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 28,
                                columnNumber: 65
                            }, this),
                            $$contentTexts[123].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#E4504D"
                                },
                                children: $$contentTexts[124].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 28,
                                columnNumber: 132
                            }, this),
                            $$contentTexts[125].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                style: {
                                    color: "#FFC40C"
                                },
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 30,
                                columnNumber: 65
                            }, this),
                            $$contentTexts[127].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                        lineNumber: 26,
                        columnNumber: 13506
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 26,
                    columnNumber: 13494
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 82
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
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 289
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 238
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 32,
                                        columnNumber: 687
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 32,
                                    columnNumber: 556
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 482
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 338
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[129].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1633
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[130].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1667
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[131].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 1793
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 1849
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1763
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[133].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[134].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 1951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "neighborstate",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#neighborstate",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 2094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 2036
                        }, this),
                        "neighborState",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "neighborState",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 32,
                                        columnNumber: 2506
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 32,
                                    columnNumber: 2375
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 2301
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 2150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 2013
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 3452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[136].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 3486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 3578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[137].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 3634
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 3548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "unselectedstate",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#unselectedstate",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 3787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 3727
                        }, this),
                        "unselectedState",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "unselectedState",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 32,
                                        columnNumber: 4203
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 32,
                                    columnNumber: 4072
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 3998
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 3845
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 3702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 5149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5213
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5280
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5347
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5414
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 5183
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[149].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 5525
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5617
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 5587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "example",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 5810
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5758
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 32,
                                        columnNumber: 6210
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 32,
                                    columnNumber: 6079
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 6005
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 5860
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 5741
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "click-to-select-nodes-and-their-directly-connected-nodes",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#click-to-select-nodes-and-their-directly-connected-nodes",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 7323
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 7222
                        }, this),
                        "Click to select nodes and their directly connected nodes",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Click-to-select-nodes-and-their-directly-connected-nodes",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 32,
                                        columnNumber: 7821
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 32,
                                    columnNumber: 7690
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 32,
                                columnNumber: 7616
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 7422
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 7156
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[151].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 8770
                        }, this),
                        $$contentTexts[152].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#E4504D"
                            },
                            children: $$contentTexts[153].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 32,
                            columnNumber: 8841
                        }, this),
                        $$contentTexts[154].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#0f0"
                            },
                            children: $$contentTexts[155].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 34,
                            columnNumber: 65
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 36,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 36,
                            columnNumber: 44
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#E4504D"
                            },
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 36,
                            columnNumber: 115
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "#FFC40C"
                            },
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 38,
                            columnNumber: 65
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 32,
                    columnNumber: 8767
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 40,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 40,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "practical-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#practical-example",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 40,
                                columnNumber: 347
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 285
                        }, this),
                        "Practical Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Practical-Example",
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
                                        fileName: "docs/manual/behavior/ClickSelect.en.md",
                                        lineNumber: 40,
                                        columnNumber: 767
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                                    lineNumber: 40,
                                    columnNumber: 636
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/ClickSelect.en.md",
                                lineNumber: 40,
                                columnNumber: 562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 407
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 40,
                    columnNumber: 258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 1743
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[163].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/ClickSelect.en.md",
                            lineNumber: 40,
                            columnNumber: 1787
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/ClickSelect.en.md",
                    lineNumber: 40,
                    columnNumber: 1713
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/ClickSelect.en.md",
            lineNumber: 26,
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
                fileName: "docs/manual/behavior/ClickSelect.en.md",
                lineNumber: 47,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/ClickSelect.en.md",
                lineNumber: 47,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/ClickSelect.en.md",
            lineNumber: 47,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/ClickSelect.en.md",
        lineNumber: 47,
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
//# sourceMappingURL=docs_manual_behavior_ClickSelect_en_md-async.js.map