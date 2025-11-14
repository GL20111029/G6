((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceLayout.en.md'],
{ "docs/manual/layout/ForceLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1521
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1561
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1557
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1637
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1633
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1713
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1784
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1818
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1853
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1780
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1709
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1902
                                }, this),
                                $$contentTexts[13].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1898
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1553
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/pdZUQIReZ_gAAAAAAAAAAAAADpdRAQFr/original",
                    alt: "Force-directed Layout Example"
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1981
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "core-concepts",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#core-concepts",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2206
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2148
                        }, this),
                        "Core Concepts",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Core-Concepts",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2618
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2487
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2413
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2125
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-principles-of-force-directed-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-principles-of-force-directed-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3701
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3615
                        }, this),
                        "Basic Principles of Force-directed Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Principles-of-Force-directed-Layout",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4169
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4038
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3964
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3785
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3564
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5115
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[15].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5152
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5187
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[17].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5222
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "detailed-core-forces",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#detailed-core-forces",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5357
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5292
                        }, this),
                        "Detailed Core Forces",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Detailed-Core-Forces",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5783
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5652
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5578
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5420
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "node-repulsion",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node-repulsion",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6812
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6753
                        }, this),
                        "Node Repulsion",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Node-Repulsion",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7226
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7095
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7021
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6869
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6729
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8183
                                    }, this),
                                    $$contentTexts[19].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8180
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8176
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8268
                                    }, this),
                                    $$contentTexts[21].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8337
                                    }, this),
                                    $$contentTexts[23].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8402
                                    }, this),
                                    $$contentTexts[25].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8265
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8261
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8483
                                        }, this),
                                        $$contentTexts[27].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/7udvQ5K8VvMAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Repulsion Force"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8480
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8720
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8785
                                                }, this),
                                                $$contentTexts[32].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8885
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8955
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8686
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8476
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8172
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "edge-attraction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edge-attraction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9090
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9030
                        }, this),
                        "Edge Attraction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Edge-Attraction",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9506
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9375
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9301
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10463
                                    }, this),
                                    $$contentTexts[38].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10460
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10456
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[39].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10548
                                    }, this),
                                    $$contentTexts[40].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[41].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10617
                                    }, this),
                                    $$contentTexts[42].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10682
                                    }, this),
                                    $$contentTexts[44].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10545
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10541
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10763
                                        }, this),
                                        $$contentTexts[46].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/WY15QYfpMSAAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Edge Attraction"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10832
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10760
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11000
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 11100
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11070
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11170
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10966
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10756
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "centripetal-force",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#centripetal-force",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11309
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11247
                        }, this),
                        "Centripetal Force",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Centripetal-Force",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11729
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11598
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11524
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11369
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12686
                                    }, this),
                                    $$contentTexts[55].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12679
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12771
                                    }, this),
                                    $$contentTexts[57].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12840
                                    }, this),
                                    $$contentTexts[59].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12905
                                    }, this),
                                    $$contentTexts[61].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12768
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12764
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12986
                                        }, this),
                                        $$contentTexts[63].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/R-26R4Zc09kAAAAAQDAAAAgADpdRAQFr/original",
                                            alt: "Centripetal Force"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13055
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12983
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13225
                                                }, this),
                                                $$contentTexts[66].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13325
                                                }, this),
                                                $$contentTexts[69].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13295
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13425
                                                }, this),
                                                $$contentTexts[72].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13395
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13191
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12979
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12675
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "interaction-of-three-forces",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#interaction-of-three-forces",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13619
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13547
                        }, this),
                        "Interaction of Three Forces",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Interaction-of-Three-Forces",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14059
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13928
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13854
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13689
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13510
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[73].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15013
                                }, this),
                                $$contentTexts[74].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15009
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[75].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15091
                                }, this),
                                $$contentTexts[76].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15087
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15169
                                }, this),
                                $$contentTexts[78].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/R-26R4Zc09kAAAAAQDAAAAgADpdRAQFr/original",
                                    alt: "Force Interactions"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15238
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15165
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "physical-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#physical-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15466
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15406
                        }, this),
                        "Physical System",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Physical-System",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15882
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15751
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15677
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15524
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15381
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "node-velocity-formula",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node-velocity-formula",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16925
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16859
                        }, this),
                        "Node Velocity Formula",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Node-Velocity-Formula",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17353
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17222
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17148
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16989
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16828
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18310
                                        }, this),
                                        $$contentTexts[80].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/4Nk0Q44tWGIAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Node Velocity Formula"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18379
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18307
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18623
                                                }, this),
                                                $$contentTexts[85].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[86].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[87].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18723
                                                }, this),
                                                $$contentTexts[88].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18693
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18519
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18303
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18810
                                        }, this),
                                        $$contentTexts[90].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18807
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18957
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18883
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "node-position-formula",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node-position-formula",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19104
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19038
                        }, this),
                        "Node Position Formula",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Node-Position-Formula",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19532
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19401
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19327
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19168
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19007
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20489
                                        }, this),
                                        $$contentTexts[95].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/orF2RoAlHwAAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Node Position Formula"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20558
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20486
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20802
                                                }, this),
                                                $$contentTexts[100].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20698
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20482
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20890
                                        }, this),
                                        $$contentTexts[102].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20887
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20969
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[105].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[106].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21072
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21041
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20965
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20883
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20478
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "cluster-center-calculation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cluster-center-calculation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21168
                        }, this),
                        "Cluster Center Calculation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Cluster-Center-Calculation",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21677
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21546
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21472
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21308
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21132
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22634
                                        }, this),
                                        $$contentTexts[108].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/2jc-TrgcG20AAAAAQDAAAAgADpdRAQFr/original",
                                            alt: "Cluster Center Calculation"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22705
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22631
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22890
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22850
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22627
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22943
                                        }, this),
                                        $$contentTexts[112].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22940
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23022
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23094
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23018
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22936
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22623
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "cluster-strength-calculation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cluster-strength-calculation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23256
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23183
                        }, this),
                        "Cluster Strength Calculation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Cluster-Strength-Calculation",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23698
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23567
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23493
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23327
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24655
                                        }, this),
                                        $$contentTexts[117].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/sVEtTLyM3rwAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Cluster Strength Calculation"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24726
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24652
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[118].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[119].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 24908
                                                }, this),
                                                $$contentTexts[120].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24873
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24648
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25033
                                        }, this),
                                        $$contentTexts[123].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25030
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25148
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25184
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25108
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25026
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24644
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "mass-effect-on-forces",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#mass-effect-on-forces",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25332
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25266
                        }, this),
                        "Mass Effect on Forces",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Mass-Effect-on-Forces",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25760
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25629
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25555
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25396
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25235
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26717
                                        }, this),
                                        $$contentTexts[128].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/5ckVQ6gHQygAAAAAQBAAAAgADpdRAQFr/original",
                                            alt: "Mass Effect on Forces"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26788
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26714
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27004
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26928
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26710
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27057
                                        }, this),
                                        $$contentTexts[133].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27054
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[136].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[137].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27239
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27208
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27132
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27050
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26706
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "energy-calculation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#energy-calculation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27390
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27327
                        }, this),
                        "Energy Calculation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Energy-Calculation",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27812
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27681
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27607
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27451
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27299
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28769
                                        }, this),
                                        $$contentTexts[139].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/M84ERKphqf0AAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "Energy Calculation"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28840
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28766
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29017
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28977
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 28762
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29070
                                        }, this),
                                        $$contentTexts[143].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29067
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29145
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29063
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 28758
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "system-convergence-condition",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#system-convergence-condition",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 29347
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29274
                        }, this),
                        "System Convergence Condition",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "System-Convergence-Condition",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29789
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29658
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 29584
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29418
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 29236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[146].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30746
                                    }, this),
                                    $$contentTexts[147].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                        src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/oBHdRLKIEAcAAAAAQFAAAAgADpdRAQFr/original",
                                        alt: "System Convergence Condition"
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30817
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30743
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30739
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30976
                                        }, this),
                                        $$contentTexts[149].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30973
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 31055
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 31091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[152].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[153].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 31158
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 31127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31051
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30969
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 30735
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-interaction-diagram",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-interaction-diagram",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 31323
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 31253
                        }, this),
                        "Force Interaction Diagram",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-Interaction-Diagram",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31759
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31628
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 31554
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 31391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 31218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "mermaid",
                    children: $$contentTexts[154].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32705
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/BOu7Rbuz4MoAAAAAQjAAAAgADpdRAQFr/original",
                    alt: "Force Simulation Diagram"
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32772
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
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 33008
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32942
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33436
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33305
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 33231
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 33072
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32911
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[155].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34382
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "basic-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34509
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34445
                        }, this),
                        "Basic Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 34933
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34802
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34728
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34571
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34416
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[156].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35897
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[157].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35933
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[158].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35969
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[159].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36005
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 35893
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35886
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[162].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 36141
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36186
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36061
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36231
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36303
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36227
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36426
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36462
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36350
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36585
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36473
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36636
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36708
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36596
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36759
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36795
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36831
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36719
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36846
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36954
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36842
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36969
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[183].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[184].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37036
                                                }, this),
                                                $$contentTexts[185].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[186].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37103
                                                }, this),
                                                $$contentTexts[187].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[188].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37170
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[189].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 37219
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37264
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36965
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37357
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37275
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 36054
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35879
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-related-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-related-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37493
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37421
                        }, this),
                        "Force-related Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-related-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37933
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37802
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37728
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37563
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "repulsion-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#repulsion-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 38980
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 38912
                        }, this),
                        "Repulsion Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Repulsion-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39412
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39281
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 39207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39046
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38879
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[192].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40376
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[193].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40412
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[194].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40448
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40484
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 40372
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 40365
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40540
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40775
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40898
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40786
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 40533
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 40358
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "edge-attraction-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edge-attraction-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 41038
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 40964
                        }, this),
                        "Edge Attraction Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Edge-Attraction-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41482
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41351
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 41277
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 41110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 40925
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[205].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42446
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[206].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42482
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[207].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42518
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[208].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42554
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 42442
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 42435
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42650
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42722
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42610
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42845
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42733
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 42603
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 42428
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "centripetal-force-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#centripetal-force-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 42989
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 42913
                        }, this),
                        "Centripetal Force Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Centripetal-Force-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 43437
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 43232
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 43063
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 42872
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[215].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[216].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44437
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[217].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44473
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[218].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44509
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 44397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 44390
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44569
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44605
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44641
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44677
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44565
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44692
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44764
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44800
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44688
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 44558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 44383
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "clustering-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#clustering-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 44930
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 44861
                        }, this),
                        "Clustering Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Clustering-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45364
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45233
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 45159
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 44997
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 44827
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[225].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46328
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[226].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46364
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[227].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46400
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[228].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46436
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 46324
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 46317
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[229].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[230].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[231].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 46572
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46617
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46492
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[232].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46710
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46628
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[235].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46761
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46803
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46721
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[236].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46818
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[237].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[238].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 46926
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 46814
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 46485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 46310
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "performance-and-optimization-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#performance-and-optimization-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 47092
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 47005
                        }, this),
                        "Performance and Optimization Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Performance-and-Optimization-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47562
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47431
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 47357
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 47177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 46953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[239].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48526
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[240].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48562
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[241].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48598
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[242].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 48634
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 48522
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 48515
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[243].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48694
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[244].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[245].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48802
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48690
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[246].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[247].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[248].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48925
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48813
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[249].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[250].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48936
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[253].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49099
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49171
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49059
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[256].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49264
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49182
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49357
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49275
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[259].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[260].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49408
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[261].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49480
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49368
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 48683
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 48508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "other-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#other-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 49600
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 49536
                        }, this),
                        "Other Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Other-Configuration",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50024
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49893
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 49819
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 49662
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 49507
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[262].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50988
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[263].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 51024
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[264].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 51060
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[265].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 51096
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 50984
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 50977
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[266].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[267].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51234
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[268].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[269].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51321
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51245
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[270].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51342
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[271].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51420
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51338
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[272].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[273].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51513
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51431
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 51145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 50970
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
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 51621
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 51563
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 52033
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51902
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 51828
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 51677
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 51540
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
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 53056
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 53000
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53464
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53333
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 53259
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 53110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 52979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[274].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 54410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "preventing-node-overlap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#preventing-node-overlap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 54573
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 54505
                        }, this),
                        "Preventing Node Overlap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Preventing-Node-Overlap",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 55005
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54874
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 54800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 54639
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 54472
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[275].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 55951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-directed-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-directed-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 56110
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 56044
                        }, this),
                        "Force-directed Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-directed-Layout",
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
                                        fileName: "docs/manual/layout/ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56538
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56407
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 56333
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 56174
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 56013
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[276].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 57484
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[277].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 57518
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[278].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 57580
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[279].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57622
                                }, this),
                                $$contentTexts[280].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 57618
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[281].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57698
                                }, this),
                                $$contentTexts[282].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 57694
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[283].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57774
                                }, this),
                                $$contentTexts[284].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 57770
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[285].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57850
                                }, this),
                                $$contentTexts[286].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 57846
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 57614
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[287].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://g6.antv.antgroup.com/examples/layout/force-directed/#force",
                            children: $$contentTexts[288].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 57957
                        }, this),
                        $$contentTexts[289].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 57927
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ForceLayout.en.md",
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
                fileName: "docs/manual/layout/ForceLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ForceLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ForceLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ForceLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_ForceLayout_en_md-async.js.map