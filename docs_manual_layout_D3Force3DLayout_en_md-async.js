((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3Force3DLayout.en.md'],
{ "docs/manual/layout/D3Force3DLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
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
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "300",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4mbSTJLOXkgAAAAAAAAAAAAADmJ7AQ/original",
                    alt: "3D Force-Directed Layout Illustration"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1579
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1824
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1766
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2236
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2105
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2031
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1880
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1743
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3261
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3204
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3671
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3540
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3466
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4617
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4657
                                }, this),
                                $$contentTexts[5].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4653
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4733
                                }, this),
                                $$contentTexts[7].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4729
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4809
                                }, this),
                                $$contentTexts[9].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4805
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[10].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4885
                                }, this),
                                $$contentTexts[11].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4881
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4649
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5051
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4990
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5469
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5338
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5264
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4964
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6415
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6456
                                }, this),
                                $$contentTexts[14].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6452
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6534
                                }, this),
                                $$contentTexts[16].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6530
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6612
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6608
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6690
                                }, this),
                                $$contentTexts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6686
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6448
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6838
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6786
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7238
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7107
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7033
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6888
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6769
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8202
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8237
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8272
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8307
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8342
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8198
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8191
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8510
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8554
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8397
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8598
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8738
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8594
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8858
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8893
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8749
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8908
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8978
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8904
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9203
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9059
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9253
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9323
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9214
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9408
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9513
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9369
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8390
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8184
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9629
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9567
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10049
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9918
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9844
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9689
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9540
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11013
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11048
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11083
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11118
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11153
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11009
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11002
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11212
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11208
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11402
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11507
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11363
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11522
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11627
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11662
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11518
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11712
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11747
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11782
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11817
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11673
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11832
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[78].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11972
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11828
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10995
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12092
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12028
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12516
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12385
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12311
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11999
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "centering-force-center",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#centering-force-center",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13561
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13494
                        }, this),
                        "Centering Force (center)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Centering-Force-(center)",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13995
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13864
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13790
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13628
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13462
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[80].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14959
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[81].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14994
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15029
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15064
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15099
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14955
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14948
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15298
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15154
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15453
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15309
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15608
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15464
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15764
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15619
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15147
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14941
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15892
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15824
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16328
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16197
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16123
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15960
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17292
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17328
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17364
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17400
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17436
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17288
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17281
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17640
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17492
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17799
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17651
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17958
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17810
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17274
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18070
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18010
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18490
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18359
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18285
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17985
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[118].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19454
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[119].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19490
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19526
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19562
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19598
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19443
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19658
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19694
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19802
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19654
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19961
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19813
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20012
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20048
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19972
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20171
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20207
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20131
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19647
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19436
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20340
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20847
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20716
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20642
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20478
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20306
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[139].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21811
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[140].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21847
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21883
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21919
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21955
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21807
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21800
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22159
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22011
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22174
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22318
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22170
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22477
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22329
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22492
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22528
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22488
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22004
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21793
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
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22756
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22692
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23184
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23053
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22979
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22820
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[160].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24148
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24184
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[162].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24220
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[163].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24256
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[164].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24292
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24144
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24137
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24352
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24388
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24424
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24496
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24348
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24511
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24655
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24507
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24742
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24814
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24666
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24901
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24973
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24825
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25060
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25132
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24984
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24130
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "axis-forces-x-y-z",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#axis-forces-x-y-z",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25248
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25186
                        }, this),
                        "Axis Forces (x, y, z)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Axis-Forces-(x,-y,-z)",
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
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25676
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25545
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25471
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25312
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25159
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[185].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26622
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[186].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26674
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[187].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26710
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[188].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26746
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[189].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26782
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[190].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26818
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26670
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26663
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26950
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27022
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26874
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27109
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27181
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27033
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27232
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27268
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27192
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27499
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27586
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27622
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27510
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27709
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27745
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27817
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27669
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26867
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26656
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
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
                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/D3Force3DLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/D3Force3DLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/D3Force3DLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_D3Force3DLayout_en_md-async.js.map