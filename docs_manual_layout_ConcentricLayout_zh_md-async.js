((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ConcentricLayout.zh.md'],
{ "docs/manual/layout/ConcentricLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
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
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples#layout-concentric",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/layout/blob/v5/packages/layout/src/circular.ts",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1557
                        }, this),
                        $$contentTexts[4].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
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
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1712
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
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2155
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2024
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1950
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1808
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1698
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3105
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[6].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3101
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
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3191
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
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3631
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3500
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3426
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3285
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3178
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4595
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4629
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4663
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4697
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4732
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4591
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4584
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[14].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4865
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4944
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4787
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5093
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5128
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4984
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5178
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5248
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5283
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5139
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5368
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5438
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5294
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5453
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5593
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5449
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5748
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5604
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5828
                                                }, this),
                                                $$contentTexts[39].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5798
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[41].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5904
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5948
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5759
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6028
                                                }, this),
                                                $$contentTexts[44].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5998
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5959
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6150
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6185
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6255
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6290
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6146
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6340
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6410
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6445
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6301
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6525
                                                }, this),
                                                $$contentTexts[57].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6562
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6632
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6456
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6752
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6787
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6802
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6867
                                                }, this),
                                                $$contentTexts[66].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6798
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4780
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4577
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "代码示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#代码示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7064
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7015
                        }, this),
                        "代码示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "代码示例",
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
                                        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7458
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7327
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7253
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7111
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7001
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8434
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8490
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8404
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[70].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8566
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[71].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8611
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8557
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
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
                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ConcentricLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ConcentricLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ConcentricLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_ConcentricLayout_zh_md-async.js.map