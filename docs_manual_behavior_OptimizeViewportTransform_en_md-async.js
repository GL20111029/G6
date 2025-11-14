((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/OptimizeViewportTransform.en.md'],
{ "docs/manual/behavior/OptimizeViewportTransform.en.md": function (module, exports, __mako_require__){
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
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 511
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 380
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 1457
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1517
                            }, this),
                            $$contentTexts[3].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 1489
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/api/event",
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1616
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1698
                            }, this),
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this),
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1825
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1890
                            }, this),
                            $$contentTexts[14].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[15].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 1955
                            }, this),
                            $$contentTexts[16].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 1588
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2097
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 2043
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2501
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2370
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2296
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 2149
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 2024
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[17].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 3447
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[18].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 3484
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 3519
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 3480
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3636
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 3580
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4044
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3913
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3839
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 3690
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 3559
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 4990
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[21].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                            lineNumber: 21,
                            columnNumber: 5026
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5023
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[22].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5073
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5106
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[24].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                            lineNumber: 21,
                            columnNumber: 5178
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5175
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[25].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5225
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[26].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5258
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5424
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 5358
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5852
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5721
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5647
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 5488
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 5327
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6956
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6812
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 6805
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[32].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7015
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7050
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7085
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7124
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7120
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7168
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7011
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7212
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7247
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7282
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7317
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7352
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7208
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[41].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7367
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[42].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7402
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7437
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[44].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7472
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7507
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7363
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[45].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7522
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[46].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#shapes",
                                                        children: $$contentTexts[47].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7587
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7557
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7644
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7683
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7679
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7727
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7518
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 7004
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 6798
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "shapes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#shapes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7821
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 7770
                            }, this),
                            "Shapes",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Shapes",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8219
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8088
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8014
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 7870
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 7754
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[50].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 9168
                            }, this),
                            $$contentTexts[51].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 9165
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[52].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 9237
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                to: "#keep-specific-elements-visible",
                children: $$contentTexts[53].value
            }, void 0, false, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                lineNumber: 21,
                columnNumber: 9312
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9495
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 9437
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9907
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9776
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9702
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 9551
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 9414
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "basic-optimization-functionality",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#basic-optimization-functionality",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10972
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 10895
                            }, this),
                            "Basic Optimization Functionality",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Basic-Optimization-Functionality",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11422
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11291
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11217
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 11047
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 10853
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[54].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 12368
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "custom-debounce-time",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#custom-debounce-time",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12532
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 12467
                            }, this),
                            "Custom Debounce Time",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Custom-Debounce-Time",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12958
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12827
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12753
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 12595
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 12437
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[55].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 13904
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "keep-specific-elements-visible",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#keep-specific-elements-visible",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14088
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 14013
                            }, this),
                            "Keep Specific Elements Visible",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Keep-Specific-Elements-Visible",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14534
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14403
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14329
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 14161
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 13973
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 15480
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[57].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                            lineNumber: 21,
                            columnNumber: 15561
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 15549
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 15637
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 15693
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 15607
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "dynamically-enabledisable-optimization-based-on-graph-element-count",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#dynamically-enabledisable-optimization-based-on-graph-element-count",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15949
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 15837
                            }, this),
                            "Dynamically Enable/Disable Optimization Based on Graph Element Count",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Dynamically-Enable/Disable-Optimization-Based-on-Graph-Element-Count",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16471
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16340
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16266
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 16060
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 15760
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[59].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 17417
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[60].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 17450
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "faq",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#faq",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17580
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 17532
                            }, this),
                            "FAQ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "FAQ",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17972
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17841
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17767
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 17626
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 17519
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-when-should-this-behavior-be-used",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-when-should-this-behavior-be-used",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19043
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 18963
                            }, this),
                            "1. When should this behavior be used?",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-When-should-this-behavior-be-used?",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19503
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19372
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19298
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 19123
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 18918
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 20449
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "practical-example",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#practical-example",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20571
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 20509
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20991
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20860
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20786
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 20631
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 20482
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 21967
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[62].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                                lineNumber: 21,
                                columnNumber: 22011
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                        lineNumber: 21,
                        columnNumber: 21937
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                lineNumber: 21,
                columnNumber: 9388
            }, this)
        ]
    }, void 0, true);
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
                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/OptimizeViewportTransform.en.md",
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
//# sourceMappingURL=docs_manual_behavior_OptimizeViewportTransform_en_md-async.js.map