((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/viewport.en.md'],
{ "docs/api/viewport.en.md": function (module, exports, __mako_require__){
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
                    id: "overview-of-viewport-operations",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview-of-viewport-operations",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 155
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 79
                        }, this),
                        "Overview of Viewport Operations",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview-of-Viewport-Operations",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 603
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 472
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 398
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 229
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 1549
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1585
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1619
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1653
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1687
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 1581
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "categories-of-viewport-operations",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#categories-of-viewport-operations",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 1847
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1769
                        }, this),
                        "Categories of Viewport Operations",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Categories-of-Viewport-Operations",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2299
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2168
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 2094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 1923
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 1726
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 3245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3285
                                }, this),
                                $$contentTexts[7].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3352
                                }, this),
                                $$contentTexts[9].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[10].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3415
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 3281
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3463
                                }, this),
                                $$contentTexts[12].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3532
                                }, this),
                                $$contentTexts[14].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[15].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3597
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 3459
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[16].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3645
                                }, this),
                                $$contentTexts[17].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[18].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3714
                                }, this),
                                $$contentTexts[19].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[20].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3779
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 3641
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[21].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3827
                                }, this),
                                $$contentTexts[22].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[23].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3896
                                }, this),
                                $$contentTexts[24].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[25].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3961
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 3823
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[26].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4009
                                }, this),
                                $$contentTexts[27].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[28].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4078
                                }, this),
                                $$contentTexts[29].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[30].value
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4143
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 4005
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 3277
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-reference",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-reference",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 4273
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 4215
                        }, this),
                        "API Reference",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-Reference",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4685
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4554
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 4480
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 4329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 4192
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphzoomtozoom-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphzoomtozoom-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 5750
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 5673
                        }, this),
                        "Graph.zoomTo(zoom, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.zoomTo(zoom,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6210
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6079
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 6005
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 5830
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 5631
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 7156
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[32].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 7189
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[33].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 7261
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 7258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7326
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[35].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7361
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7396
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7431
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[38].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7466
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 7322
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 7315
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7525
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7665
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7521
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7709
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7783
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7898
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7705
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7987
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8078
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7909
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 7514
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 7308
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[52].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 8108
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 8105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[53].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 8155
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphzoombyratio-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphzoombyratio-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 8345
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 8267
                        }, this),
                        "Graph.zoomBy(ratio, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.zoomBy(ratio,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8807
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8676
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 8602
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 8426
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 8224
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[54].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 9753
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[55].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 9786
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 9858
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 9855
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[57].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9923
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9958
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[59].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9993
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10028
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[61].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10063
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 9919
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 9912
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10262
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10118
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[69].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 10380
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10376
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10495
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10302
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[73].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 10584
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10675
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10506
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 10111
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 9905
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[75].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 10705
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 10702
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[76].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 10752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslatetoposition-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslatetoposition-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 10944
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 10865
                        }, this),
                        "Graph.translateTo(position, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateTo(position,-animation)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11406
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11275
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 11201
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 11025
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 10821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[77].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 12352
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[78].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 12385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[79].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 12457
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 12454
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[80].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12522
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[81].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12557
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[82].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12592
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[83].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12627
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[84].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12662
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 12518
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 12511
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12721
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 12795
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12886
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12717
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12930
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12965
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 13004
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13000
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13119
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12926
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 12710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 12504
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[94].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 13149
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 13146
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[95].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 13196
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphtranslatebyoffset-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphtranslatebyoffset-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 13384
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 13307
                        }, this),
                        "Graph.translateBy(offset, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.translateBy(offset,-animation)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13842
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13711
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 13637
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 13463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 13265
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[96].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 14788
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[97].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 14821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 14893
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 14890
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14958
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14993
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15029
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15065
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15101
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 14954
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 14947
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[106].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 15237
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15294
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15330
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15157
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[111].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 15451
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15568
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15371
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 15150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 14940
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[113].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 15598
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 15595
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[114].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 15646
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrotatetoangle-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrotatetoangle-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 15841
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 15761
                        }, this),
                        "Graph.rotateTo(angle, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.rotateTo(angle,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16307
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16176
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 16102
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 15924
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 15716
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[115].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 17253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[116].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 17287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[117].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 17360
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 17357
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[118].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17426
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[119].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17462
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17498
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17534
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17570
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 17422
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 17415
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17630
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17666
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17702
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17738
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17774
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17626
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 17895
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17891
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18012
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17815
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18027
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18063
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 18103
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18099
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18196
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18023
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 17619
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 17408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[136].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 18226
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 18223
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[137].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 18274
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphrotatebyangle-animation-origin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphrotatebyangle-animation-origin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 18469
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 18389
                        }, this),
                        "Graph.rotateBy(angle, animation, origin)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.rotateBy(angle,-animation,-origin)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18935
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18804
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 18730
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 18552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 18344
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[138].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 19881
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[139].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 19915
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[140].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 19988
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 19985
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20054
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20090
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20126
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20162
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20198
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 20050
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 20043
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20294
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20330
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20402
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20254
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[153].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 20523
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20640
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20443
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#point",
                                                children: $$contentTexts[157].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 20731
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20824
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20651
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 20247
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 20036
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[159].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 20854
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 20851
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[160].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 20902
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfitviewoptions-animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfitviewoptions-animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 21085
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 21011
                        }, this),
                        "Graph.fitView(options, animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.fitView(options,-animation)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21537
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21406
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 21332
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 21161
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 20972
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 22483
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[162].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 22517
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[163].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 22590
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 22587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[164].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22656
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[165].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22692
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[166].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22728
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[167].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22764
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[168].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22800
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 22652
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 22645
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22896
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23004
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22856
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23019
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23055
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#viewportanimationeffecttiming",
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/api/viewport.en.md",
                                                lineNumber: 21,
                                                columnNumber: 23095
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23015
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 22849
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 22638
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[177].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 23242
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 23239
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[178].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23308
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[179].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23344
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[180].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23380
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[181].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23416
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 23304
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 23297
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23476
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23584
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23472
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23629
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23665
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23701
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23737
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23625
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 23465
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 23290
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[190].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 23797
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 23794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[191].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 23845
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphfitcenteranimation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphfitcenteranimation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 24016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 23948
                        }, this),
                        "Graph.fitCenter(animation)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.fitCenter(animation)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24454
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24323
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 24249
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 24085
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 23915
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[192].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 25400
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[193].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 25434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[194].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 25507
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 25504
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25573
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[196].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25609
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[197].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25645
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[198].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25681
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[199].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25717
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 25569
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 25562
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[200].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25777
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[201].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25813
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#viewportanimationeffecttiming",
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25853
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25849
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[203].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25934
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25970
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 25773
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 25766
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 25555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[204].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 26000
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 25997
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[205].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 26048
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetzoom",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetzoom",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 26197
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 26140
                        }, this),
                        "Graph.getZoom()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getZoom()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26613
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26482
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 26408
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 26255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 26118
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[206].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 27559
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[207].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 27593
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[208].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 27666
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 27663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[209].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 27714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetposition",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetposition",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 27871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 27810
                        }, this),
                        "Graph.getPosition()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getPosition()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28295
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28164
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 28090
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 27933
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 27784
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[210].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 29241
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[211].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 29275
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[212].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 29348
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 29345
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[213].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 29396
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetrotation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetrotation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 29553
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 29492
                        }, this),
                        "Graph.getRotation()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getRotation()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29977
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29846
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 29772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 29615
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 29466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[214].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 30923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[215].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 30957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[216].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 31030
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 31027
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[217].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 31078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetcanvascenter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetcanvascenter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 31243
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 31178
                        }, this),
                        "Graph.getCanvasCenter()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getCanvasCenter()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31675
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31544
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 31470
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 31309
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 31148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[218].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 32621
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[219].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 32655
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[220].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 32728
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 32725
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[221].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 32776
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetviewportcenter",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetviewportcenter",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 32945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 32878
                        }, this),
                        "Graph.getViewportCenter()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getViewportCenter()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33381
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33250
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 33176
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 33013
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 32846
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[222].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 34327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[223].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 34361
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[224].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 34434
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 34431
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[225].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 34482
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsetzoomrangezoomrange",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsetzoomrangezoomrange",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 34659
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 34588
                        }, this),
                        "Graph.setZoomRange(zoomRange)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setZoomRange(zoomRange)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34972
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 34898
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 34731
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 34552
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[226].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36049
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[227].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36083
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[228].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 36156
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36153
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[229].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36222
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[230].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36258
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[231].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36294
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[232].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36330
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[233].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36366
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 36218
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 36211
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[234].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36426
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[235].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36462
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[236].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36498
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[237].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36534
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[238].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36570
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 36422
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 36415
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36204
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[239].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 36630
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36627
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[240].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36678
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgetzoomrange",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgetzoomrange",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 36837
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 36775
                        }, this),
                        "Graph.getZoomRange()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getZoomRange()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37263
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37132
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 37058
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 36900
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 36748
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[241].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38209
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[242].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38243
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[243].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 38316
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38313
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[244].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38364
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphresize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphresize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 38511
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 38455
                        }, this),
                        "Graph.resize()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.resize()",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38925
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38794
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 38720
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 38568
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 38434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[245].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 39871
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[246].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 39905
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphresizewidth-height",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphresizewidth-height",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 40076
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 40008
                        }, this),
                        "Graph.resize(width, height)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.resize(width,-height)",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40516
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40385
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 40311
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 40146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 39975
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[247].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 41462
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[248].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 41496
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[249].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 41569
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 41566
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[250].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41635
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[251].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41671
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[252].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41707
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[253].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41743
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[254].value
                                    }, void 0, false, {
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 41779
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 41631
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 41624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[256].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[259].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41983
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41835
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[260].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[261].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[262].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[263].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[264].value
                                        }, void 0, false, {
                                            fileName: "docs/api/viewport.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42172
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42024
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 41828
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 41617
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[265].value
                    }, void 0, false, {
                        fileName: "docs/api/viewport.en.md",
                        lineNumber: 21,
                        columnNumber: 42232
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 42229
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[266].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 42280
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "type-definitions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#type-definitions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 42437
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 42376
                        }, this),
                        "Type Definitions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Type-Definitions",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42855
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42724
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 42650
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 42496
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 42350
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "viewportanimationeffecttiming",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#viewportanimationeffecttiming",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 43914
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 43840
                        }, this),
                        "ViewportAnimationEffectTiming",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ViewportAnimationEffectTiming",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44358
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44227
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 44153
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 43986
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 43801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[267].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 45304
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[268].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 45338
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "point",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#point",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 45473
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 45423
                        }, this),
                        "Point",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Point",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45869
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45738
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 45664
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 45521
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 45408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[269].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 46815
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[270].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 46849
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "fitviewoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fitviewoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 47002
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 46943
                        }, this),
                        "FitViewOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "FitViewOptions",
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
                                        fileName: "docs/api/viewport.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47416
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/viewport.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47285
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/viewport.en.md",
                                lineNumber: 21,
                                columnNumber: 47211
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/viewport.en.md",
                            lineNumber: 21,
                            columnNumber: 47059
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 46919
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[271].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 48362
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[272].value
                }, void 0, false, {
                    fileName: "docs/api/viewport.en.md",
                    lineNumber: 21,
                    columnNumber: 48396
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/viewport.en.md",
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
                fileName: "docs/api/viewport.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/viewport.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/viewport.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/viewport.en.md",
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
//# sourceMappingURL=docs_api_viewport_en_md-async.js.map