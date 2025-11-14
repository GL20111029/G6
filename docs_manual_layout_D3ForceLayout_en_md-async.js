((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3ForceLayout.en.md'],
{ "docs/manual/layout/D3ForceLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
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
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1579
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1619
                                }, this),
                                $$contentTexts[5].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1615
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1695
                                }, this),
                                $$contentTexts[7].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1691
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1771
                                }, this),
                                $$contentTexts[9].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1912
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1838
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1767
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1961
                                }, this),
                                $$contentTexts[14].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1957
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1611
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    alt: "D3Force layout diagram",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-_sFS5IRGGcAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2040
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
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2258
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2200
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2670
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2539
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2314
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2177
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3695
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3638
                        }, this),
                        "Force System",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-System",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4105
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3974
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3750
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3616
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5051
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "350",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*p5L2S6gtZ2AAAAAAAAAAAAAAemJ7AQ/original",
                    alt: "force"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5084
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[16].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 5228
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5216
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5282
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5278
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5360
                                }, this),
                                $$contentTexts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5356
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[21].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5438
                                }, this),
                                $$contentTexts[22].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5434
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[23].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5516
                                }, this),
                                $$contentTexts[24].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5512
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[25].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5594
                                }, this),
                                $$contentTexts[26].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5590
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5274
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "iteration-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#iteration-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5760
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5699
                        }, this),
                        "Iteration System",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Iteration-System",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6178
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6047
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5973
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5819
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5673
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[27].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7124
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "alpha-value-energy",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#alpha-value-energy",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7248
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7185
                        }, this),
                        "Alpha Value (Energy)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Alpha-Value-(Energy)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7674
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7543
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7469
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7311
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7157
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[28].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[29].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8661
                                }, this),
                                $$contentTexts[30].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8657
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[31].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8739
                                }, this),
                                $$contentTexts[32].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8735
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[33].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8817
                                }, this),
                                $$contentTexts[34].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8813
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8653
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "iterations",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#iterations",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8971
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8916
                        }, this),
                        "Iterations",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Iterations",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9377
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9246
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9172
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9024
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8896
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[36].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10364
                                }, this),
                                $$contentTexts[37].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10360
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[38].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10442
                                }, this),
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10585
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10511
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10438
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10356
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[43].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 10647
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10635
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10762
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10710
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11162
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11031
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10957
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10812
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10693
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12126
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12161
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12196
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12231
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12266
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12122
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12115
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12430
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12465
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12321
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12505
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12804
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12660
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12959
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12815
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12970
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13125
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12314
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12108
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "iteration-control",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#iteration-control",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13385
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13323
                        }, this),
                        "Iteration Control",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Iteration-Control",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13805
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13674
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13600
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13445
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13296
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14769
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[75].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14804
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14839
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[77].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14874
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[78].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14909
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14765
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14758
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14964
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15263
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15119
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15418
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15274
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15573
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15429
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15728
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15584
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14957
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14751
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-model-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-model-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15848
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15784
                        }, this),
                        "Force Model Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-Model-Options",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16272
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16141
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16067
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15910
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15755
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "link-force-link",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#link-force-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17303
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17243
                        }, this),
                        "Link Force (link)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Link-Force-(link)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17723
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17592
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17518
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17363
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18687
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18722
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18758
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18794
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18830
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18676
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18926
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18998
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19034
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18886
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19045
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19204
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19475
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19511
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19363
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18879
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18669
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "many-body-force-manybody",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#many-body-force-manybody",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19641
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19572
                        }, this),
                        "Many-Body Force (manyBody)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Many-Body-Force-(manyBody)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20079
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19948
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19874
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19538
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21043
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21079
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21115
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[123].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21151
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[124].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21187
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21039
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21032
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21391
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21243
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21442
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21550
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21402
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21601
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21637
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21709
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21561
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21796
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21832
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21868
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21720
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21236
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21025
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "center-force-center",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#center-force-center",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21988
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21924
                        }, this),
                        "Center Force (center)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Center-Force-(center)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22416
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22285
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22211
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22052
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21895
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23380
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23416
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23452
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23488
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23524
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23376
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23369
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23584
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23620
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23656
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23692
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23728
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23580
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23887
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23739
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24046
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23898
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23573
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23362
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "collision-force-collide",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#collision-force-collide",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24174
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24106
                        }, this),
                        "Collision Force (collide)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Collision-Force-(collide)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24610
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24479
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24073
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[158].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25574
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[159].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25610
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[160].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25682
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[162].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25718
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25563
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25922
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25774
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26081
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25933
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26240
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26092
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25767
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "radial-force-radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#radial-force-radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26360
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26296
                        }, this),
                        "Radial Force (radial)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Radial-Force-(radial)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26788
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26657
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26583
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26424
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[175].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27752
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[176].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27788
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[177].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27824
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[178].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27860
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[179].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27896
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27748
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27741
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27952
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28111
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28418
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28469
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 28577
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28429
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27945
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27734
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "x-axis-force-x",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#x-axis-force-x",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 28687
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 28628
                        }, this),
                        "X Axis Force (x)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "X-Axis-Force-(x)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29105
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28974
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 28900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 28746
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 28604
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[196].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30069
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[197].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30105
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[198].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30141
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[199].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30177
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[200].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30213
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30065
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30058
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30345
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30417
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30269
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30432
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 30576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30428
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 30051
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "y-axis-force-y",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#y-axis-force-y",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30686
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30627
                        }, this),
                        "Y Axis Force (y)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Y-Axis-Force-(y)",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31104
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30973
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30899
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 30745
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 30603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[209].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32068
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[210].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32104
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[211].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32140
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[212].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32176
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[213].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32064
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32057
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32416
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32268
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32539
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32575
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32427
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32050
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
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32625
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33095
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32964
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32739
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32602
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "prevent-node-overlap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#prevent-node-overlap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34136
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34071
                        }, this),
                        "Prevent Node Overlap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Prevent-Node-Overlap",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 34562
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34431
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34357
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34041
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[222].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[223].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples/layout/force-directed/#prevent-overlap",
                            children: $$contentTexts[224].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35600
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35570
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "team-clustering-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#team-clustering-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 35800
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35733
                        }, this),
                        "Team Clustering Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Team-Clustering-Layout",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36230
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36099
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 36025
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35865
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[225].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37176
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37240
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[226].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37296
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37210
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[227].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37373
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[228].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37419
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37364
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37499
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[230].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37541
                                }, this),
                                $$contentTexts[231].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37537
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[232].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37617
                                }, this),
                                $$contentTexts[233].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37613
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[234].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37693
                                }, this),
                                $$contentTexts[235].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37689
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[236].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37769
                                }, this),
                                $$contentTexts[237].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37765
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[238].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37845
                                }, this),
                                $$contentTexts[239].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37841
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37533
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[240].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples/layout/force-directed/#functional-params",
                            children: $$contentTexts[241].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37952
                        }, this),
                        $$contentTexts[242].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37922
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/D3ForceLayout.en.md",
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
                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/D3ForceLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/D3ForceLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/D3ForceLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_D3ForceLayout_en_md-async.js.map