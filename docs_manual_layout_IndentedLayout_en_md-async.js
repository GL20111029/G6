((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/IndentedLayout.en.md'],
{ "docs/manual/layout/IndentedLayout.en.md": function (module, exports, __mako_require__){
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
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                    id: "indented-tree-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#indented-tree-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 133
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 68
                        }, this),
                        "Indented Tree Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Indented-Tree-Layout",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 559
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 428
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 354
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
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
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1576
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1523
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1978
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1847
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1773
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1627
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1505
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2924
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NBUzRonaOYMAAAAAAAAAAABkARQnAQ",
                    width: "175",
                    alt: "Indented Tree Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2956
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
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3167
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3113
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3571
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3440
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3366
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3219
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3094
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4521
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4555
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4589
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4623
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4517
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration-items",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration-items",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4755
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4691
                        }, this),
                        "Configuration Items",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration-Items",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5179
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5048
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4974
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4817
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4662
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[5].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 6137
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6125
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6200
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6234
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6268
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6302
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6336
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6189
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6430
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6500
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6535
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6391
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6649
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6719
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6575
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6874
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6730
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7029
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6885
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7114
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7184
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7040
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7195
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7389
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7424
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7459
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7494
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7350
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7505
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7804
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7660
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7959
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7815
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7970
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8125
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "complex-type-explanations",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#complex-type-explanations",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8401
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8331
                        }, this),
                        "Complex Type Explanations",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Complex-Type-Explanations",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8837
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8706
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8632
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8469
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8296
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9794
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9791
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9849
                                                }, this),
                                                $$contentTexts[62].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mq6YSIKrAt0AAAAAAAAAAABkARQnAQ",
                                                    width: "110",
                                                    alt: "LR"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9914
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10043
                                                }, this),
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VGEnRbpvxlUAAAAAAAAAAABkARQnAQ",
                                                    width: "90",
                                                    alt: "RL"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10108
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10236
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Vek6RqtUXNcAAAAAAAAAAABkARQnAQ",
                                                    width: "160",
                                                    alt: "H"
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10301
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10232
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9841
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9787
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[67].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10442
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10528
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10593
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10563
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10489
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10435
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[72].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10676
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10673
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[75].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10792
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10762
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10723
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10669
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10875
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10872
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10926
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                                    lang: "js",
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10991
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10961
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10922
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10868
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9783
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "example-code",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-code",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11151
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11094
                        }, this),
                        "Example Code",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example-Code",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11561
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11430
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11356
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11072
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g6.antv.antgroup.com/en/examples/layout/indented",
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12548
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 12519
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12507
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "automatic-child-node-distribution",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#automatic-child-node-distribution",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12783
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12705
                        }, this),
                        "Automatic Child Node Distribution",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Automatic-Child-Node-Distribution",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13235
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13104
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13030
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12859
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12662
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Kc63QoxgLNYAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14181
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14301
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "right-side-child-node-distribution",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#right-side-child-node-distribution",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14485
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14406
                        }, this),
                        "Right Side Child Node Distribution",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Right-Side-Child-Node-Distribution",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14939
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14808
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14734
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14562
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14362
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*3PioQ4TAMx8AAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "left-side-child-node-distribution",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#left-side-child-node-distribution",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16187
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16109
                        }, this),
                        "Left Side Child Node Distribution",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Left-Side-Child-Node-Distribution",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16639
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16508
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16434
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16263
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16066
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*o6uzQ5nmXJkAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17585
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17705
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "custom-child-node-distribution",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-child-node-distribution",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17881
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17806
                        }, this),
                        "Custom Child Node Distribution",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Child-Node-Distribution",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18327
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18196
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18122
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17954
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17766
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Kc63QoxgLNYAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19273
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19393
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "no-line-break-for-first-child-node",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#no-line-break-for-first-child-node",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19577
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19498
                        }, this),
                        "No Line Break for First Child Node",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "No-Line-Break-for-First-Child-Node",
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
                                        fileName: "docs/manual/layout/IndentedLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20031
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19900
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/IndentedLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19826
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/IndentedLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19654
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19454
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*bC-pRrO7srwAAAAAAAAAAAAADmJ7AQ/original",
                    width: "300"
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20977
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/IndentedLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21097
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/IndentedLayout.en.md",
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
                fileName: "docs/manual/layout/IndentedLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/IndentedLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/IndentedLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/IndentedLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_IndentedLayout_en_md-async.js.map