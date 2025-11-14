((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/render.zh.md'],
{ "docs/api/render.zh.md": function (module, exports, __mako_require__){
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
                    id: "绘制与渲染概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#绘制与渲染概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 107
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 55
                        }, this),
                        "绘制与渲染概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "绘制与渲染概述",
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 157
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 1453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1493
                                }, this),
                                $$contentTexts[2].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 1489
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1569
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 1565
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 1485
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 1646
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
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 1745
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 1694
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2143
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2012
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 1938
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 1794
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 1678
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphdraw",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphdraw",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 3162
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 3108
                        }, this),
                        "Graph.draw()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.draw()",
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3572
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3441
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 3367
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 3217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 3089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4518
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4550
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/api/render.zh.md",
                        lineNumber: 21,
                        columnNumber: 4621
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4618
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 4670
                        }, this),
                        $$contentTexts[10].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4667
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[11].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[12].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 4767
                        }, this),
                        $$contentTexts[13].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[14].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 4836
                        }, this),
                        $$contentTexts[15].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 4901
                        }, this),
                        $$contentTexts[17].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4738
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[18].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 4973
                        }, this),
                        $$contentTexts[19].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 4970
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[20].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5046
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[21].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 5118
                        }, this),
                        $$contentTexts[22].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5115
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[23].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[24].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 5263
                        }, this),
                        $$contentTexts[25].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5260
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[26].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5336
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[27].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 5408
                        }, this),
                        $$contentTexts[28].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5405
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5481
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrender",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrender",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 5627
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 5571
                        }, this),
                        "Graph.render()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.render()",
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6041
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5910
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 5836
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 5684
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 5550
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 6987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[32].value
                    }, void 0, false, {
                        fileName: "docs/api/render.zh.md",
                        lineNumber: 21,
                        columnNumber: 7092
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7142
                        }, this),
                        $$contentTexts[34].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7139
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7215
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[36].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7250
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[37].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7285
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7211
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[38].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7328
                        }, this),
                        $$contentTexts[39].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7325
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7401
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[41].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7473
                        }, this),
                        $$contentTexts[42].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7470
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[43].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7546
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[44].value
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7618
                        }, this),
                        $$contentTexts[45].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7615
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[46].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7691
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphclear",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphclear",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 7835
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7780
                        }, this),
                        "Graph.clear()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.clear()",
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8247
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8116
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 8042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 7891
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 7760
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[47].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9193
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[48].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9226
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[49].value
                    }, void 0, false, {
                        fileName: "docs/api/render.zh.md",
                        lineNumber: 21,
                        columnNumber: 9298
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9295
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[50].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9345
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[51].value
                    }, void 0, false, {
                        fileName: "docs/api/render.zh.md",
                        lineNumber: 21,
                        columnNumber: 9381
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9378
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[52].value
                }, void 0, false, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9428
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
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 9560
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 9511
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9954
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9823
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 9749
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 9607
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 9497
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "draw-与-render-的选择",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#draw-与-render-的选择",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 10989
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 10927
                        }, this),
                        "draw 与 render 的选择",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "draw-与-render-的选择",
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
                                        fileName: "docs/api/render.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11409
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11278
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/render.zh.md",
                                lineNumber: 21,
                                columnNumber: 11204
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 11049
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 10900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[53].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12389
                                }, this),
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12493
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12454
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 12359
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12568
                                }, this),
                                $$contentTexts[60].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12637
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/api/render.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12742
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/render.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12633
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/render.zh.md",
                            lineNumber: 21,
                            columnNumber: 12538
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/render.zh.md",
                    lineNumber: 21,
                    columnNumber: 12355
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/render.zh.md",
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
                fileName: "docs/api/render.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/render.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/render.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/render.zh.md",
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
//# sourceMappingURL=docs_api_render_zh_md-async.js.map