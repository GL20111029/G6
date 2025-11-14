((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/LassoSelect.en.md'],
{ "docs/manual/behavior/LassoSelect.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/lasso-select.md?watch=parent");
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 1629
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 1575
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 2033
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1902
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 1828
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 1681
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 1556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 2979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3015
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3049
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 3011
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 3177
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3115
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3597
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3466
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 3392
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 3088
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4573
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4615
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 4543
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 4758
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4702
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5035
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 4961
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4812
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 4681
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6112
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                        lineNumber: 23,
                        columnNumber: 6147
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6144
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6193
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6225
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[11].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                        lineNumber: 23,
                        columnNumber: 6297
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6294
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6377
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 6543
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 6477
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6971
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6840
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 6766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 6607
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6446
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7935
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7970
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8005
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8040
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8075
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 7931
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 7924
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8199
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8273
                                                }, this),
                                                $$contentTexts[24].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8347
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8343
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8391
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8130
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8431
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/api/event#event-object-properties",
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8690
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8586
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8950
                                                }, this),
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9015
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9080
                                                }, this),
                                                $$contentTexts[45].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9180
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9245
                                                }, this),
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9310
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9150
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9380
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#immediately",
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9399
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9491
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9567
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9461
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9681
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9391
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#mode",
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9700
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9794
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9859
                                                }, this),
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9924
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9989
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[69].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10037
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10081
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9692
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10166
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10207
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10092
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10322
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10387
                                                }, this),
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10452
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10517
                                                }, this),
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10582
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[85].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10630
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10626
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10674
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10218
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10693
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10749
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                href: "/manual/element/shape/properties",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10788
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10784
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10912
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10908
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10968
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10685
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11048
                                                }, this),
                                                $$contentTexts[93].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[94].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                        lineNumber: 23,
                                                        columnNumber: 11121
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11117
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[95].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[96].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11328
                                                }, this),
                                                $$contentTexts[97].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[98].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11393
                                                }, this),
                                                $$contentTexts[99].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11458
                                                }, this),
                                                $$contentTexts[101].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[102].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11525
                                                }, this),
                                                $$contentTexts[103].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[104].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[105].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11628
                                                }, this),
                                                $$contentTexts[106].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11700
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10979
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 8123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 7917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "immediately",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#immediately",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 11804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 11748
                        }, this),
                        "immediately",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "immediately",
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12212
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12081
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 12007
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 11858
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 11727
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[107].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[108].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[109].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13232
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13324
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[110].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13380
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13294
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "mode",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#mode",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 13511
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13462
                        }, this),
                        "mode",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "mode",
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 13905
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 13774
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 13700
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13448
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[111].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 14851
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[112].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14893
                                }, this),
                                $$contentTexts[113].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 14889
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[114].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14969
                                }, this),
                                $$contentTexts[115].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 14965
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[116].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15045
                                }, this),
                                $$contentTexts[117].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15041
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[118].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15121
                                }, this),
                                $$contentTexts[119].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 14885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[120].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15290
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[121].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15260
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 15465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15415
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15861
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15730
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 15656
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15513
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15400
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16825
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[123].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16861
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[124].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16897
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[125].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16933
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 16821
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 16814
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16993
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17029
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17101
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16989
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17116
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[132].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 17228
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17224
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17112
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17318
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17278
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17543
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17431
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17666
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17554
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17757
                                                }, this),
                                                $$contentTexts[146].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17824
                                                }, this),
                                                $$contentTexts[148].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[149].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17891
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17936
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17677
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18059
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17947
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18146
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18182
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18070
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[158].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18273
                                                }, this),
                                                $$contentTexts[159].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[160].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18340
                                                }, this),
                                                $$contentTexts[161].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[162].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18407
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18452
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18193
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18539
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18463
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18620
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18692
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18728
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18616
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18851
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18739
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18866
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18862
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19025
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19097
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18985
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19220
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19108
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19343
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19231
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19430
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[188].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 19470
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19466
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19354
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19632
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19520
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[194].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19723
                                                }, this),
                                                $$contentTexts[195].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[196].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19790
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19958
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19846
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 16982
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 16807
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[201].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20018
                        }, this),
                        $$contentTexts[202].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20015
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[203].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20093
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20185
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20241
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20155
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "trigger",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#trigger",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 20378
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20326
                        }, this),
                        "trigger",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "trigger",
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 20778
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 20647
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 20573
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20428
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20309
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[205].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 21754
                        }, this),
                        $$contentTexts[207].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 21724
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[208].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[209].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 21859
                        }, this),
                        $$contentTexts[210].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[211].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 21926
                        }, this),
                        $$contentTexts[212].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 21993
                        }, this),
                        $$contentTexts[214].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 21829
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
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 22153
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 22091
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
                                        fileName: "docs/manual/behavior/LassoSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 22573
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 22442
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/LassoSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 22368
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 22213
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 22064
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 23549
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[215].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/LassoSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 23593
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/LassoSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 23519
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/LassoSelect.en.md",
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
                fileName: "docs/manual/behavior/LassoSelect.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/LassoSelect.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/LassoSelect.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/LassoSelect.en.md",
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
//# sourceMappingURL=docs_manual_behavior_LassoSelect_en_md-async.js.map