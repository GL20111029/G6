((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/custom-plugin.en.md'],
{ "docs/manual/plugin/custom-plugin.en.md": function (module, exports, __mako_require__){
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
__mako_require__("common/manual/custom-extension/plugin/implement-plugin.md?watch=parent");
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
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 1457
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
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 1562
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 1508
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 1966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 1614
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 1489
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "add-extra-components-rendering-logic-etc",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#add-extra-components-rendering-logic-etc",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 3047
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 2962
                        }, this),
                        "Add extra components, rendering logic, etc.",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Add-extra-components,-rendering-logic,-etc.",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 3519
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3388
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 3314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 3133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 2912
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[1].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4473
                                }, this),
                                $$contentTexts[2].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4540
                                }, this),
                                $$contentTexts[4].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4603
                                }, this),
                                $$contentTexts[6].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4666
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4729
                                }, this),
                                $$contentTexts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4793
                                }, this),
                                $$contentTexts[12].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4858
                                }, this),
                                $$contentTexts[14].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 4469
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 4932
                                }, this),
                                $$contentTexts[16].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5001
                                }, this),
                                $$contentTexts[18].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5066
                                }, this),
                                $$contentTexts[20].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#remote-data-loading",
                                    children: $$contentTexts[21].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5131
                                }, this),
                                $$contentTexts[22].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 4928
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 4465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "when-built-in-plugins-cannot-meet-the-requirements",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#when-built-in-plugins-cannot-meet-the-requirements",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 5387
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 5292
                        }, this),
                        "When built-in plugins cannot meet the requirements",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "When-built-in-plugins-cannot-meet-the-requirements",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5873
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5742
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 5668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 5480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 5232
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[23].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 6819
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                        children: [
                            $$contentTexts[24].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/antvis/G6",
                                children: $$contentTexts[25].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 6885
                            }, this),
                            $$contentTexts[26].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                        lineNumber: 23,
                        columnNumber: 6855
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 6852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "custom-plugin-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-plugin-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 7088
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 7021
                        }, this),
                        "Custom Plugin Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Plugin-Examples",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 7518
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7387
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 7313
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 7153
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 6989
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[27].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 8464
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[28].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 8497
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "remote-data-loading",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#remote-data-loading",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 8623
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 8559
                        }, this),
                        "Remote Data Loading",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Remote-Data-Loading",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 9047
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8916
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 8842
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 8685
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 8530
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 9993
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[30].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 10026
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: $$contentTexts[31].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 10103
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10099
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[32].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 10148
                                    }, this),
                                    $$contentTexts[33].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 10145
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 10095
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10257
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[34].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10313
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 10227
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "automatically-enable-or-disable-animation-based-on-node-count",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#automatically-enable-or-disable-animation-based-on-node-count",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 10557
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10451
                        }, this),
                        "Automatically Enable or Disable Animation Based on Node Count",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Automatically-Enable-or-Disable-Animation-Based-on-Node-Count",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 11065
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10934
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 10860
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 10661
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 10380
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 12011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[36].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[37].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12114
                                }, this),
                                $$contentTexts[38].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 12084
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[39].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12188
                                }, this),
                                $$contentTexts[40].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#configure-plugin",
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12253
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 12184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 12080
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "register-plugin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#register-plugin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 12410
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 12350
                        }, this),
                        "Register Plugin",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Register-Plugin",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 12826
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 12695
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 12621
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 12468
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 12325
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[42].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 13772
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[43].value
                }, void 0, false, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 13805
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configure-plugin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configure-plugin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 13961
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 13900
                        }, this),
                        "Configure Plugin",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configure-Plugin",
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
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 14379
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14248
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 14174
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 14020
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 13874
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    $$contentTexts[44].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15362
                                    }, this),
                                    $$contentTexts[46].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                        to: "/manual/plugin/overview#configuration-method",
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/custom-plugin.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15427
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/custom-plugin.en.md",
                                lineNumber: 23,
                                columnNumber: 15333
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 15329
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[48].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#automatically-enable-or-disable-animation-based-on-node-count",
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                                            lineNumber: 23,
                                            columnNumber: 15558
                                        }, this),
                                        $$contentTexts[50].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                    lang: "typescript",
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                                    lineNumber: 23,
                                    columnNumber: 15695
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/plugin/custom-plugin.en.md",
                            lineNumber: 23,
                            columnNumber: 15525
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/custom-plugin.en.md",
                    lineNumber: 23,
                    columnNumber: 15325
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/plugin/custom-plugin.en.md",
            lineNumber: 23,
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
                fileName: "docs/manual/plugin/custom-plugin.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/custom-plugin.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/custom-plugin.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/custom-plugin.en.md",
        lineNumber: 30,
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
//# sourceMappingURL=docs_manual_plugin_custom-plugin_en_md-async.js.map