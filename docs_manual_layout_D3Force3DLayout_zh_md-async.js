((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3Force3DLayout.zh.md'],
{ "docs/manual/layout/D3Force3DLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://d3js.org/d3-force",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "300",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4mbSTJLOXkgAAAAAAAAAAAAADmJ7AQ/original",
                    alt: "3D 力导向布局示意图"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "核心概念",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#核心概念",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1756
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1707
                        }, this),
                        "核心概念",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "核心概念",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2150
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2019
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1693
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力系统",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力系统",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3157
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3109
                        }, this),
                        "力系统",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力系统",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3549
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3418
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3344
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3096
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4535
                                }, this),
                                $$contentTexts[5].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4531
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4611
                                }, this),
                                $$contentTexts[7].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4607
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4687
                                }, this),
                                $$contentTexts[9].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4683
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[10].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4763
                                }, this),
                                $$contentTexts[11].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4759
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4527
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "迭代系统",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#迭代系统",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 4905
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4856
                        }, this),
                        "迭代系统",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "迭代系统",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5299
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5168
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4952
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4842
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6286
                                }, this),
                                $$contentTexts[14].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6282
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6364
                                }, this),
                                $$contentTexts[16].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6360
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6442
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6438
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6520
                                }, this),
                                $$contentTexts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6516
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6278
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
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6660
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6612
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7052
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6921
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6847
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6706
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8016
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8051
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8086
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8121
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8012
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8005
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8250
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8324
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8368
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8211
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8408
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8637
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8707
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8563
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8757
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8862
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8718
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9017
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8873
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9032
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9067
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9102
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9172
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9028
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9183
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8204
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7998
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "迭代控制",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#迭代控制",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9417
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9368
                        }, this),
                        "迭代控制",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "迭代控制",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9811
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9680
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9606
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 9464
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 9354
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10775
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10810
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10845
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10880
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10915
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10771
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10764
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10970
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11125
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11389
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11424
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11280
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11579
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11435
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11629
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11734
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11590
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10963
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力模型配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力模型配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11826
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11776
                        }, this),
                        "力模型配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力模型配置",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12222
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12091
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12017
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11874
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 11761
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "中心力center",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#中心力center",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13241
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13187
                        }, this),
                        "中心力（center）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "中心力（center）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13649
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13518
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13444
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13295
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13168
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[80].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14613
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[81].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14648
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14683
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14718
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14753
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14609
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14602
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14847
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14917
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14952
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14808
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15002
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15107
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14963
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15262
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15118
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15418
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15273
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14801
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14595
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "碰撞力collide",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#碰撞力collide",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15520
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15465
                        }, this),
                        "碰撞力（collide）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "碰撞力（collide）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15930
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15799
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15725
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15575
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15445
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16894
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16930
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16966
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17002
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17038
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16883
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17134
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17206
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17242
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17094
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17257
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17329
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17401
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17253
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17560
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17412
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16876
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "链接力link",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#链接力link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17656
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17604
                        }, this),
                        "链接力（link）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "链接力（link）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18060
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17929
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17855
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17708
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[118].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19024
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[119].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19060
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19096
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19132
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19168
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19013
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19264
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19336
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19372
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19224
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19423
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19459
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19495
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19531
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19383
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19618
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19654
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19690
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19542
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19849
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19701
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19006
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "多体力manybody",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多体力manybody",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19953
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19897
                        }, this),
                        "多体力（manyBody）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多体力（manyBody）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20365
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20234
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20160
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20009
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19876
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[139].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21329
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[140].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21365
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21437
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21473
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21325
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21318
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21569
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21605
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21641
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21677
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21692
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21764
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21836
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21688
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21995
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21847
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22154
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22006
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21522
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21311
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "径向力radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#径向力radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22254
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22200
                        }, this),
                        "径向力（radial）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "径向力（radial）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22662
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22531
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22457
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22308
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22181
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[160].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23626
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23662
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[162].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23698
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[163].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23734
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[164].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23770
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23622
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23615
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23830
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23866
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23826
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24025
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23985
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24144
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24343
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24451
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24303
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24466
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24502
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24574
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24610
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24462
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23819
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "坐标力xyz",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#坐标力xyz",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24704
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24653
                        }, this),
                        "坐标力（x、y、z）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "坐标力（x、y、z）",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24979
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24905
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24637
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[185].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 26056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[186].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26108
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[187].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26144
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[188].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26180
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[189].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26216
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[190].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26252
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 26104
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26097
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26456
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26308
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26615
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26467
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26666
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26738
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26774
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26626
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26897
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26933
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26785
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26984
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27020
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27092
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26944
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27251
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27103
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26301
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 26090
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
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
                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/D3Force3DLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_D3Force3DLayout_zh_md-async.js.map