((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/behavior.zh.md'],
{ "docs/api/behavior.zh.md": function (module, exports, __mako_require__){
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
                    id: "交互概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#交互概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 52
                        }, this),
                        "交互概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "交互概述",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 495
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 364
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 290
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 1441
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/behavior/overview",
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 1501
                        }, this),
                        $$contentTexts[3].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 1473
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
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 1666
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 1615
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2064
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1933
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 1859
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 1715
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 1599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetbehaviors",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetbehaviors",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 3099
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 3037
                        }, this),
                        "Graph.getBehaviors()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getBehaviors()",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3525
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3394
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 3320
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 3162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 3010
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4471
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4503
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 4574
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4628
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#behavioroptions",
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4695
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 4624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[10].value
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4764
                                }, this),
                                $$contentTexts[11].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 4760
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[12].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 4846
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4843
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4893
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetbehaviorsbehaviors",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetbehaviorsbehaviors",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 5069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 4998
                        }, this),
                        "Graph.setBehaviors(behaviors)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setBehaviors(behaviors)",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5382
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 5308
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 5141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 4962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 6459
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 6492
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[16].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 6564
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 6561
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6629
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6664
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6699
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6734
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6769
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 6625
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 6618
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6828
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6863
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#behavioroptions",
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/api/behavior.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6902
                                            }, this),
                                            $$contentTexts[25].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6898
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[26].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6994
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[27].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7029
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 6824
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 6817
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 6611
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[28].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 7088
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7085
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7135
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7168
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[31].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 7240
                        }, this),
                        $$contentTexts[32].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7237
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[33].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7313
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[34].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 7385
                        }, this),
                        $$contentTexts[35].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7382
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7458
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[37].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 7530
                        }, this),
                        $$contentTexts[38].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7527
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[39].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphupdatebehaviorbehavior",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphupdatebehaviorbehavior",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 7781
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 7709
                        }, this),
                        "Graph.updateBehavior(behavior)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.updateBehavior(behavior)",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8227
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8096
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 8022
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 7854
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 7672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[40].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[41].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 9202
                        }, this),
                        $$contentTexts[42].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9173
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[43].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9271
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[44].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 9343
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9340
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9408
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9443
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9478
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9513
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9548
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 9404
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 9397
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9607
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9642
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#updatebehavioroption",
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/api/behavior.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9681
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9677
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9752
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9787
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 9603
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 9596
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[55].value
                    }, void 0, false, {
                        fileName: "docs/api/behavior.zh.md",
                        lineNumber: 21,
                        columnNumber: 9846
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9843
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[56].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[57].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 9922
                        }, this),
                        $$contentTexts[58].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9893
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[59].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 9994
                        }, this),
                        $$contentTexts[60].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 9991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 10067
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[62].value
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 10139
                        }, this),
                        $$contentTexts[63].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 10136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[64].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 10212
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "类型定义",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#类型定义",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 10344
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 10295
                        }, this),
                        "类型定义",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "类型定义",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10738
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10607
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 10533
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 10391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 10281
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "behavioroptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#behavioroptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 11769
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 11709
                        }, this),
                        "BehaviorOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "BehaviorOptions",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12185
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12054
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 11980
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 11827
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 11684
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[65].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 13131
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "updatebehavioroption",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#updatebehavioroption",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 13295
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 13230
                        }, this),
                        "UpdateBehaviorOption",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "UpdateBehaviorOption",
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
                                        fileName: "docs/api/behavior.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13721
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/behavior.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13590
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/behavior.zh.md",
                                lineNumber: 21,
                                columnNumber: 13516
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/behavior.zh.md",
                            lineNumber: 21,
                            columnNumber: 13358
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 13200
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/api/behavior.zh.md",
                    lineNumber: 21,
                    columnNumber: 14667
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/behavior.zh.md",
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
                fileName: "docs/api/behavior.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/behavior.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/behavior.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/behavior.zh.md",
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
//# sourceMappingURL=docs_api_behavior_zh_md-async.js.map