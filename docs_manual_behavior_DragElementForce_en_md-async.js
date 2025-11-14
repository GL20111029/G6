((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElementForce.en.md'],
{ "docs/manual/behavior/DragElementForce.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 1548
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 1611
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    alt: "Effect of DragElementForce",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I5uDQZWTzMsAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 1682
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
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 1900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 1844
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2308
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2177
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 2103
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 1954
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 1823
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3254
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                        lineNumber: 21,
                        columnNumber: 3289
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3335
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[10].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[11].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                        lineNumber: 21,
                        columnNumber: 3439
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3436
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[12].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[13].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3519
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
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 3685
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 3619
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3982
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 3908
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 3749
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 3588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5077
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5112
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5147
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5182
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5217
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 5073
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 5066
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5276
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5341
                                                }, this),
                                                $$contentTexts[22].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[24].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5450
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5494
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5272
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5678
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5534
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[31].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5758
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5790
                                                }, this),
                                                $$contentTexts[33].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5728
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5897
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5689
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6021
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6065
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5908
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6150
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6189
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6185
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6233
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6076
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6248
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6313
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6345
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6410
                                                }, this),
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6442
                                                }, this),
                                                $$contentTexts[51].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6507
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6539
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6604
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6636
                                                }, this),
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6701
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6733
                                                }, this),
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6798
                                                }, this),
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6830
                                                }, this),
                                                $$contentTexts[63].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[64].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6895
                                                }, this),
                                                $$contentTexts[65].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6965
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6971
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6977
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6244
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6996
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7061
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7126
                                                }, this),
                                                $$contentTexts[71].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[72].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7191
                                                }, this),
                                                $$contentTexts[73].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[74].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7256
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[75].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7304
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6988
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7440
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7410
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7567
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7371
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 5265
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 5059
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "cursor",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cursor",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 7661
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 7610
                        }, this),
                        "cursor",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "cursor",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8059
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7928
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 7854
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 7710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 7594
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[81].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9008
                        }, this),
                        $$contentTexts[82].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 9005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[83].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9085
                                }, this),
                                $$contentTexts[84].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9081
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[85].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9159
                                }, this),
                                $$contentTexts[86].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9155
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[87].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9233
                                }, this),
                                $$contentTexts[88].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9229
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 9077
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[89].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[90].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9337
                        }, this),
                        $$contentTexts[91].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[92].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9402
                        }, this),
                        $$contentTexts[93].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[94].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9467
                        }, this),
                        $$contentTexts[95].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[96].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9532
                        }, this),
                        $$contentTexts[97].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[98].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9597
                        }, this),
                        $$contentTexts[99].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[100].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9662
                        }, this),
                        $$contentTexts[101].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[102].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9729
                        }, this),
                        $$contentTexts[103].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[104].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9796
                        }, this),
                        $$contentTexts[105].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[106].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9863
                        }, this),
                        $$contentTexts[107].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[108].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9930
                        }, this),
                        $$contentTexts[109].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[110].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 9997
                        }, this),
                        $$contentTexts[111].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[112].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10064
                        }, this),
                        $$contentTexts[113].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[114].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10131
                        }, this),
                        $$contentTexts[115].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10198
                        }, this),
                        $$contentTexts[117].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10265
                        }, this),
                        $$contentTexts[119].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10332
                        }, this),
                        $$contentTexts[121].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10399
                        }, this),
                        $$contentTexts[123].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[124].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10466
                        }, this),
                        $$contentTexts[125].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[126].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10533
                        }, this),
                        $$contentTexts[127].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10600
                        }, this),
                        $$contentTexts[129].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[130].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10667
                        }, this),
                        $$contentTexts[131].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10734
                        }, this),
                        $$contentTexts[133].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10801
                        }, this),
                        $$contentTexts[135].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[136].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10868
                        }, this),
                        $$contentTexts[137].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[138].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 10935
                        }, this),
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11002
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11069
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11136
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11203
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11270
                        }, this),
                        $$contentTexts[149].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11337
                        }, this),
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11404
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11471
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11538
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11605
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11672
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 9308
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[161].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 11716
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[162].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 11750
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
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 11873
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11825
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12265
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12134
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 12060
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 11919
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 11812
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "1-what-is-the-difference-between-dragelementforce-and-dragelement",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-what-is-the-difference-between-dragelementforce-and-dragelement",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 13396
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 13286
                        }, this),
                        "1. What is the difference between DragElementForce and DragElement?",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-What-is-the-difference-between-DragElementForce-and-DragElement?",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13916
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13785
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 13711
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 13506
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 13211
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[163].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14870
                                }, this),
                                $$contentTexts[164].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[165].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14937
                                }, this),
                                $$contentTexts[166].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[167].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15004
                                }, this),
                                $$contentTexts[168].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 14866
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[169].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15080
                                }, this),
                                $$contentTexts[170].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 15076
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 14862
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
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 15246
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 15184
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15666
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15535
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 15461
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 15306
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 15157
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "mesh-effect",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#mesh-effect",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 16689
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 16633
                        }, this),
                        "Mesh Effect",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Mesh-Effect",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17097
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16966
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 16892
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 16743
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 16612
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 18073
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[171].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 18117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 18043
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "fix-dragged-nodes",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#fix-dragged-nodes",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 18274
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 18212
                        }, this),
                        "Fix Dragged Nodes",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Fix-Dragged-Nodes",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18694
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18563
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 18489
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 18334
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 18185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 19670
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 19714
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 19640
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "shadow-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shadow-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 19861
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 19804
                        }, this),
                        "Shadow Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Shadow-Style",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20271
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20140
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 20066
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 19916
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 19782
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "shadowbasestyleprops",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shadowbasestyleprops",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 21312
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 21247
                        }, this),
                        "shadow{",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://g.antv.antgroup.com/api/basic/display-object#%E7%BB%98%E5%9B%BE%E5%B1%9E%E6%80%A7",
                            children: $$contentTexts[173].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 21362
                        }, this),
                        "}",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "shadow{-}",
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
                                        fileName: "docs/manual/behavior/DragElementForce.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21850
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21719
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElementForce.en.md",
                                lineNumber: 21,
                                columnNumber: 21645
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 21498
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 21217
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 22805
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[175].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 22851
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[176].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22889
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[177].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22925
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[178].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22961
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[179].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22997
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 22885
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 23038
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[181].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23076
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[182].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23112
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[183].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: $$contentTexts[184].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23184
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElementForce.en.md",
                            lineNumber: 21,
                            columnNumber: 23072
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElementForce.en.md",
                    lineNumber: 21,
                    columnNumber: 22796
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/DragElementForce.en.md",
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
                fileName: "docs/manual/behavior/DragElementForce.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/DragElementForce.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/DragElementForce.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/DragElementForce.en.md",
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
//# sourceMappingURL=docs_manual_behavior_DragElementForce_en_md-async.js.map