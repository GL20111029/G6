((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/event.zh.md'],
{ "docs/api/event.zh.md": function (module, exports, __mako_require__){
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
                    id: "事件系统概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件系统概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 54
                        }, this),
                        "事件系统概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件系统概述",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 503
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 1449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "事件分类",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件分类",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 1544
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 1495
                        }, this),
                        "事件分类",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件分类",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1938
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1807
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 1733
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 1591
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 1481
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 2884
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[2].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2924
                                }, this),
                                $$contentTexts[3].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2991
                                }, this),
                                $$contentTexts[5].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3054
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 2920
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3101
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3168
                                }, this),
                                $$contentTexts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3232
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 3097
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3280
                                }, this),
                                $$contentTexts[13].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[14].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3349
                                }, this),
                                $$contentTexts[15].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[16].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3414
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 3276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 2916
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "事件命名规则",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件命名规则",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 3530
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 3479
                        }, this),
                        "事件命名规则",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件命名规则",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3928
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3797
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 3723
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 3579
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 3463
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[17].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[18].value
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 4903
                        }, this),
                        $$contentTexts[19].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 4874
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[20].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4980
                                }, this),
                                $$contentTexts[21].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 4976
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[22].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5054
                                }, this),
                                $$contentTexts[23].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 5050
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[24].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5128
                                }, this),
                                $$contentTexts[25].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 5124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 4972
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "最佳实践使用常量枚举",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#最佳实践使用常量枚举",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 5278
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 5223
                        }, this),
                        "最佳实践：使用常量枚举",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "最佳实践：使用常量枚举",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5686
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5555
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 5481
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 5332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 5203
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[26].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[27].value
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 6661
                        }, this),
                        $$contentTexts[28].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 6632
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 6734
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 6806
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 6803
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[32].value
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 6883
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 6918
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 6879
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-参考",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-参考",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 7025
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 6974
                        }, this),
                        "API 参考",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-参考",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7423
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7292
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 7218
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 7074
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 6958
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoneventname-callback-once",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoneventname-callback-once",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 8484
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 8409
                        }, this),
                        "Graph.on(eventName, callback, once)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.on(eventName,-callback,-once)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8940
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8809
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 8735
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 8562
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 8369
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 9886
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 9919
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "参数",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#参数",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 10047
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 10000
                        }, this),
                        "参数",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "参数",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10437
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 10232
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 10092
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 9988
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11436
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[38].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11471
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[39].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11506
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[40].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11541
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 11397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 11390
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11740
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11596
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11784
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11924
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11780
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11964
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 11589
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 11383
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "返回值",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#返回值",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 12196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 12148
                        }, this),
                        "返回值",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "返回值",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12588
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12457
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 12383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 12242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 12135
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13542
                                }, this),
                                $$contentTexts[56].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 13538
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13620
                                }, this),
                                $$contentTexts[58].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 13616
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 13534
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 13758
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 13711
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14148
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14017
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 13943
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 13803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 13699
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[59].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 15094
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphonceeventname-callback",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphonceeventname-callback",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 15272
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 15200
                        }, this),
                        "Graph.once(eventName, callback)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.once(eventName,-callback)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15720
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15589
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 15515
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 15346
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 15163
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[60].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 16666
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 16699
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "参数-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#参数-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 16831
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 16782
                        }, this),
                        "参数",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "参数",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17090
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 17016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 16876
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 16768
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[62].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18185
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18220
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[64].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18255
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18290
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18325
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 18181
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 18174
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18454
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18489
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18524
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18380
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18708
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18564
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 18373
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 18167
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "返回值-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#返回值-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 18829
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 18779
                        }, this),
                        "返回值",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "返回值",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19090
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 19016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 18875
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 18764
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20175
                                }, this),
                                $$contentTexts[78].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 20171
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[79].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20253
                                }, this),
                                $$contentTexts[80].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 20249
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 20167
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 20395
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 20346
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20785
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20654
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 20580
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 20440
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 20332
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 21731
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoff",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoff",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 21871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 21818
                        }, this),
                        "Graph.off()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off()",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22279
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22148
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 22074
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 21925
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 21800
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 23225
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 23258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "返回值-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#返回值-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 23392
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 23342
                        }, this),
                        "返回值",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "返回值",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23784
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23653
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 23579
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 23438
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 23327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24738
                                }, this),
                                $$contentTexts[85].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 24734
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24816
                                }, this),
                                $$contentTexts[87].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 24812
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 24730
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 24958
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 24909
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25348
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25217
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 25143
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 25003
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 24895
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 26294
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoffeventname",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoffeventname",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 26452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 26390
                        }, this),
                        "Graph.off(eventName)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off(eventName)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26878
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26747
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 26673
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 26515
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 26363
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 27824
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[90].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 27857
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "参数-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#参数-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 27989
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 27940
                        }, this),
                        "参数",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "参数",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28379
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28248
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 28174
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 28034
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 27926
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29343
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[92].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29378
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[93].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29413
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[94].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29448
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[95].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29483
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 29339
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 29332
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[96].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29542
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[97].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29577
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[98].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29647
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29682
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 29538
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 29531
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 29325
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "返回值-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#返回值-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 29804
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 29754
                        }, this),
                        "返回值",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "返回值",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30196
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30065
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 29991
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 29850
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 29739
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31150
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 31146
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[103].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31230
                                }, this),
                                $$contentTexts[104].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 31226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 31142
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 31374
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 31325
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31764
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31633
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 31559
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 31419
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 31311
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[105].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 32710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoffeventname-callback",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoffeventname-callback",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 32887
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 32816
                        }, this),
                        "Graph.off(eventName, callback)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off(eventName,-callback)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33333
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33202
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 33128
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 32960
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 32780
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[106].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 34279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[107].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 34313
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "参数-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#参数-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 34446
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 34397
                        }, this),
                        "参数",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "参数",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34836
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34705
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 34631
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 34491
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 34383
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35800
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35836
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35872
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35908
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[112].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35944
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 35796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 35789
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36004
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36076
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36148
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36000
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36229
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36301
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36337
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36189
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 35993
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 35782
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "返回值-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#返回值-4",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 36459
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 36409
                        }, this),
                        "返回值",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "返回值",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36851
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36720
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 36646
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 36505
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 36394
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[123].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37805
                                }, this),
                                $$contentTexts[124].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 37801
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[125].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37885
                                }, this),
                                $$contentTexts[126].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 37881
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 37797
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例-4",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 38029
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 37980
                        }, this),
                        "示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38419
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38288
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 38214
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 38074
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 37966
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[127].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 39365
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "事件常量枚举",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件常量枚举",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 39502
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 39451
                        }, this),
                        "事件常量枚举",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件常量枚举",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39900
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39769
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 39695
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 39551
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 39435
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[128].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 40846
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "节点事件-nodeevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#节点事件-nodeevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 40963
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 40904
                        }, this),
                        "节点事件 (NodeEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "节点事件-(NodeEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41381
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41250
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 41176
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 41022
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 40880
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[129].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42345
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[130].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42381
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[131].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42417
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 42341
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 42334
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[133].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42517
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42473
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[136].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42647
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42692
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42603
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[139].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42777
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42822
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42733
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[142].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42907
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42952
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42863
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[145].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43037
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43082
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42993
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43127
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[148].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43167
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43163
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43123
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[151].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43297
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43342
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43253
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[154].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43383
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[157].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43557
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43602
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43513
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[160].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43687
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43732
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43817
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43862
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43773
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43907
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 43947
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43903
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[169].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 44077
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44122
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44033
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[172].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 44207
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 44337
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44382
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44293
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[178].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 44467
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44423
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[181].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 44597
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44642
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44553
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 42466
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 42327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "边事件-edgeevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#边事件-edgeevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 44780
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 44722
                        }, this),
                        "边事件 (EdgeEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "边事件-(EdgeEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45196
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45065
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 44991
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 44838
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 44699
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[183].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46160
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[184].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46196
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[185].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46232
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 46156
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 46149
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[187].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46332
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46377
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46288
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[190].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46462
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46507
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46418
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[193].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46592
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46637
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46548
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[196].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46722
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46718
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46767
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46678
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46852
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46897
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46808
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[202].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46982
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46978
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47027
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46938
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[205].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47112
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47068
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[208].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47242
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47287
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47198
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47332
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[211].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47372
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47368
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47417
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47328
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[214].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47502
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47547
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47458
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[217].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47632
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47677
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47588
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[220].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47762
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47758
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47807
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47718
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[223].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 47892
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47937
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47848
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[226].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 48022
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48067
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47978
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 46281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 46142
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "combo事件-comboevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#combo事件-comboevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 48215
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 48152
                        }, this),
                        "Combo事件 (ComboEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Combo事件-(ComboEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48641
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48510
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 48436
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 48278
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 48124
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[228].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49605
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[229].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49641
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[230].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49677
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 49601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 49594
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[232].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 49777
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49822
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49733
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[235].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 49907
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[236].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49952
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49863
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[237].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[238].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50037
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[239].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50082
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49993
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[240].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50127
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[241].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50167
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50163
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[242].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50123
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[243].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[244].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50297
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[245].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50342
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50253
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[246].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[247].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[248].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50383
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[249].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[250].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50557
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50602
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50513
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[253].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50687
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50732
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[256].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50817
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50862
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50773
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50907
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[259].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50947
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[260].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50903
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[261].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[262].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51077
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[263].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51122
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51033
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[264].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[265].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51207
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[266].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[267].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[268].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51337
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[269].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51382
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51293
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[270].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[271].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51467
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[272].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51423
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[273].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[274].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51597
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[275].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51642
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51553
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[276].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[277].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51727
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[278].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51683
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[279].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[280].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 51857
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[281].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51902
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51813
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 49726
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 49587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "画布事件-canvasevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#画布事件-canvasevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 52046
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 51985
                        }, this),
                        "画布事件 (CanvasEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "画布事件-(CanvasEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52468
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52337
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 52263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 52107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 51959
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[282].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53432
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[283].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53468
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[284].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53504
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 53428
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 53421
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[285].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[286].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 53604
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[287].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53560
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[288].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53694
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[289].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 53734
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[290].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53779
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53690
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[291].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[292].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 53864
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[293].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53820
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[294].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[295].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 53994
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[296].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54039
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53950
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[297].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[298].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54124
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[299].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54169
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54080
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[300].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[301].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54254
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54250
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[302].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54299
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54210
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[303].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[304].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54384
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[305].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54429
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54340
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[306].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[307].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54514
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[308].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54559
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54470
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[309].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[310].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54644
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[311].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54689
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54600
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[312].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[313].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54774
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[314].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54819
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54730
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[315].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[316].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54904
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[317].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54949
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54860
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[318].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[319].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55034
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[320].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55079
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54990
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[321].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[322].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55164
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[323].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55209
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55120
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[324].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55254
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[325].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55294
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[326].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55250
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[327].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[328].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55424
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[329].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55469
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55380
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[330].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[331].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55554
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[332].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55599
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55510
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[333].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55644
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[334].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55684
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55680
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[335].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55729
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55640
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[336].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[337].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 55814
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55810
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[338].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 55859
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55770
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 53553
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 53414
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "图表生命周期事件-graphevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#图表生命周期事件-graphevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 56009
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 55945
                        }, this),
                        "图表生命周期事件 (GraphEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "图表生命周期事件-(GraphEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56437
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 56232
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 56073
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 55916
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[339].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[340].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57437
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[341].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 57473
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 57397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 57390
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[342].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[343].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 57573
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57569
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[344].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57618
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[345].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[346].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 57703
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[347].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57748
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57659
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[348].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[349].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 57833
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[350].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57878
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57789
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[351].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[352].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 57963
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[353].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58008
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57919
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[354].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[355].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58093
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58089
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[356].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58049
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[357].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[358].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58223
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[359].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58268
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58179
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[360].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[361].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58353
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[362].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58398
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58309
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[363].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[364].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58483
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[365].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58528
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[367].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58613
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58569
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[370].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58743
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58788
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58699
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[373].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58873
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58918
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58829
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[375].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[376].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59003
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[377].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58959
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[378].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59093
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[379].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59133
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59178
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59089
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[382].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59263
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[383].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59308
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59219
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[384].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59353
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[385].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59393
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59389
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[386].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59438
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59349
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[387].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[388].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59523
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[389].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59568
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59479
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[390].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59613
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[391].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59653
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59649
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59698
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59609
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[394].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59783
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[395].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59828
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59739
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[396].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[397].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 59913
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 59958
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59869
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[400].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60043
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[401].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60088
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59999
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[402].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[403].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60173
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[404].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60218
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60129
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[405].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[406].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60303
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60348
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60259
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[408].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[409].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60433
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[410].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60478
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60389
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[411].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[412].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60563
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[413].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60608
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60519
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[414].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[415].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60693
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[416].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60738
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60649
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[418].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60823
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[419].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60868
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60779
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[420].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[421].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 60953
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60949
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[422].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 60998
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60909
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[423].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[424].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 61083
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[425].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61128
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61039
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[426].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[427].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 61213
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61258
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61169
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61303
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[430].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 61343
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61339
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 61388
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61299
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 57522
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 57383
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "容器事件-containerevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#容器事件-containerevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 61538
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 61474
                        }, this),
                        "容器事件 (ContainerEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "容器事件-(ContainerEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 61966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 61761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 61602
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 61445
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[432].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62930
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[433].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62966
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[434].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 63002
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 62926
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 62919
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[435].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[436].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63102
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[437].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63147
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63058
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[438].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[439].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63232
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63277
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63188
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 63051
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 62912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "通用事件-commonevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#通用事件-commonevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 63421
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 63360
                        }, this),
                        "通用事件 (CommonEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "通用事件-(CommonEvent)",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 63843
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63712
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 63638
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 63482
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 63334
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[441].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 64789
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[442].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64841
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[443].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64877
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[444].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64913
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 64837
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 64830
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[446].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65013
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65058
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 64969
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[449].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65143
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65188
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65099
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[452].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65273
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[453].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65318
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65229
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[454].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[455].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65403
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65399
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[456].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65448
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65359
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[457].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[458].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65533
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65529
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[459].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65578
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65489
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[461].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65663
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65659
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65708
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65619
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[463].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[464].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65793
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[465].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65838
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65749
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[466].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65883
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[467].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65923
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65919
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65968
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65879
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[470].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66053
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[471].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66098
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[472].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[473].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66183
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[474].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66228
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66139
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[476].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66313
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66269
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[478].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[479].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66443
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[480].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66488
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66399
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[481].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[482].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66573
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66569
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[483].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66618
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[484].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[485].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66703
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[486].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66748
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66659
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[487].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[488].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66833
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[489].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66878
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66789
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[490].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[491].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66963
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67008
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66919
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[494].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67093
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67089
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67049
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[497].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67223
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67268
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67179
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[500].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67353
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67398
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67309
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[503].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67483
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67528
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[505].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[506].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67613
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67569
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 64962
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 64823
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "使用技巧",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#使用技巧",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 67778
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 67729
                        }, this),
                        "使用技巧",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "使用技巧",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 68172
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68041
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 67967
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 67825
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 67715
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "链式调用",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#链式调用",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 69181
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 69132
                        }, this),
                        "链式调用",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "链式调用",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 69575
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 69444
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 69370
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 69228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 69118
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[508].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 70521
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[509].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 70555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "事件代理",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件代理",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 70688
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 70639
                        }, this),
                        "事件代理",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件代理",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 71082
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 70951
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 70877
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 70735
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 70625
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[510].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 72028
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[511].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 72062
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "事件对象属性",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#事件对象属性",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 72199
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 72148
                        }, this),
                        "事件对象属性",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "事件对象属性",
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
                                        fileName: "docs/api/event.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 72597
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 72466
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.zh.md",
                                lineNumber: 21,
                                columnNumber: 72392
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 72248
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 72132
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[512].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 73543
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[513].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73585
                                }, this),
                                $$contentTexts[514].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 73581
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[515].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73661
                                }, this),
                                $$contentTexts[516].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 73657
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[517].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73737
                                }, this),
                                $$contentTexts[518].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 73733
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[519].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73813
                                }, this),
                                $$contentTexts[520].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 73809
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[521].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73889
                                }, this),
                                $$contentTexts[522].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.zh.md",
                            lineNumber: 21,
                            columnNumber: 73885
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 73577
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[523].value
                }, void 0, false, {
                    fileName: "docs/api/event.zh.md",
                    lineNumber: 21,
                    columnNumber: 73966
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/event.zh.md",
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
                fileName: "docs/api/event.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/event.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/event.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/event.zh.md",
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
//# sourceMappingURL=docs_api_event_zh_md-async.js.map