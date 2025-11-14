((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/BrushSelect.en.md'],
{ "docs/manual/behavior/BrushSelect.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/brush-select.md?watch=parent");
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 1574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 1990
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1859
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 1785
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 1632
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 2936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 2972
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3006
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 3134
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3072
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3554
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3423
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 3349
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 3194
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 3045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4530
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4572
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 4500
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 4715
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4659
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5123
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4992
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 4918
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 4769
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 4638
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                        lineNumber: 23,
                        columnNumber: 6104
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6101
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6150
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[8].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[9].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                        lineNumber: 23,
                        columnNumber: 6253
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6250
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[11].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6332
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 6498
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 6432
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6926
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6795
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 6721
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 6562
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 6401
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7890
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7925
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7960
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7995
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 8030
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 7886
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 7879
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8089
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[18].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8154
                                                }, this),
                                                $$contentTexts[20].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8228
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[23].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8302
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8346
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8085
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8530
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8386
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/api/event#event-object-properties",
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8645
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8758
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8793
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8541
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8808
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8843
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8908
                                                }, this),
                                                $$contentTexts[39].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8973
                                                }, this),
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9038
                                                }, this),
                                                $$contentTexts[43].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9138
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9203
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9268
                                                }, this),
                                                $$contentTexts[50].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9338
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8804
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9353
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9418
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9494
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#immediately",
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9559
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9388
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9349
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#mode",
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9771
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9830
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9895
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9960
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10025
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[70].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10073
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9702
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10243
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10128
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[76].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[77].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10358
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10423
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[81].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10488
                                                }, this),
                                                $$contentTexts[82].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[83].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10553
                                                }, this),
                                                $$contentTexts[84].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[85].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10618
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 10666
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10662
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10710
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10254
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[88].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#style",
                                                    children: $$contentTexts[89].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10790
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10887
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10721
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[92].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[93].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 10967
                                                }, this),
                                                $$contentTexts[94].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: $$contentTexts[95].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                        lineNumber: 23,
                                                        columnNumber: 11040
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11036
                                                }, this),
                                                $$contentTexts[96].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[97].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11238
                                                }, this),
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11307
                                                }, this),
                                                $$contentTexts[99].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[100].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11339
                                                }, this),
                                                $$contentTexts[101].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[102].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11406
                                                }, this),
                                                $$contentTexts[103].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11473
                                                }, this),
                                                $$contentTexts[105].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 10937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11576
                                                }, this),
                                                $$contentTexts[108].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11643
                                                }, this),
                                                $$contentTexts[110].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[111].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11710
                                                }, this),
                                                $$contentTexts[112].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[113].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11777
                                                }, this),
                                                $$contentTexts[114].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[115].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[116].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 11880
                                                }, this),
                                                $$contentTexts[117].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 11952
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10898
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 8078
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 7872
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 12056
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 12000
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12464
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12333
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 12259
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 12110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 11979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[118].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[119].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13440
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[120].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13484
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13576
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[121].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13632
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13546
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 13763
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13714
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 14157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 13952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 13810
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 13700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[122].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[123].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15145
                                }, this),
                                $$contentTexts[124].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15141
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[125].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15221
                                }, this),
                                $$contentTexts[126].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15217
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[127].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15297
                                }, this),
                                $$contentTexts[128].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15293
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[129].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15373
                                }, this),
                                $$contentTexts[130].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15369
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15137
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[131].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15450
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15542
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15584
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15512
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 15717
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15667
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 16113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15982
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 15908
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 15765
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 15652
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[133].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 17077
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[134].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 17113
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[135].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 17149
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[136].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 17185
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 17073
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 17066
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17353
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17241
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17368
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17404
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17440
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[143].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 17480
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17476
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17364
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17606
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17642
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17530
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17759
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17795
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17683
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17810
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17918
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17806
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17933
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17969
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[156].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18009
                                                }, this),
                                                $$contentTexts[157].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[158].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18076
                                                }, this),
                                                $$contentTexts[159].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[160].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18143
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17929
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18239
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18311
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18199
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18362
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18434
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18322
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[169].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18525
                                                }, this),
                                                $$contentTexts[170].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[171].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18592
                                                }, this),
                                                $$contentTexts[172].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[173].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18659
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18704
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18445
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18827
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18715
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18872
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18908
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18944
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18868
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19031
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19067
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18991
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19190
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19226
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19114
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19349
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19237
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19360
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19595
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19483
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                lineNumber: 23,
                                                columnNumber: 19722
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19718
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19606
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19884
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19772
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19935
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[205].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 19975
                                                }, this),
                                                $$contentTexts[206].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[207].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 20042
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 19971
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 20087
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19895
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 20102
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 20138
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 20174
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                                            lineNumber: 23,
                                            columnNumber: 20210
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 20098
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 17234
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 17059
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[212].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20270
                        }, this),
                        $$contentTexts[213].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[214].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20345
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20437
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[215].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20407
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
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 20650
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20588
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
                                        fileName: "docs/manual/behavior/BrushSelect.en.md",
                                        lineNumber: 23,
                                        columnNumber: 21070
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                                    lineNumber: 23,
                                    columnNumber: 20939
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/BrushSelect.en.md",
                                lineNumber: 23,
                                columnNumber: 20865
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 20710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 20561
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 22046
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[216].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/BrushSelect.en.md",
                            lineNumber: 23,
                            columnNumber: 22090
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/BrushSelect.en.md",
                    lineNumber: 23,
                    columnNumber: 22016
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/BrushSelect.en.md",
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
                fileName: "docs/manual/behavior/BrushSelect.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/BrushSelect.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/BrushSelect.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/BrushSelect.en.md",
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
//# sourceMappingURL=docs_manual_behavior_BrushSelect_en_md-async.js.map