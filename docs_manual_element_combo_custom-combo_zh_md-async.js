((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/combo/custom-combo.zh.md'],
{ "docs/manual/element/combo/custom-combo.zh.md": function (module, exports, __mako_require__){
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
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[0].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/combo/base-combo",
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 66
                            }, this),
                            $$contentTexts[2].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "开始之前了解-combo-的基本构成",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#开始之前了解-combo-的基本构成",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 262
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 199
                            }, this),
                            "开始之前：了解 Combo 的基本构成",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "开始之前：了解-Combo-的基本构成",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 686
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 555
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 481
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 324
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 171
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[3].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 1632
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "200",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*z-OxR4MAdUwAAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 1664
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1792
                                    }, this),
                                    $$contentTexts[5].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 1788
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1864
                                    }, this),
                                    $$contentTexts[7].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 1860
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1936
                                    }, this),
                                    $$contentTexts[9].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 1932
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 1784
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "combo-的特殊性",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#combo-的特殊性",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2084
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 2029
                            }, this),
                            "Combo 的特殊性",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Combo-的特殊性",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2490
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2359
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2285
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 2137
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 2009
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 3436
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3477
                                    }, this),
                                    $$contentTexts[12].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3473
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3555
                                    }, this),
                                    $$contentTexts[14].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3551
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3633
                                    }, this),
                                    $$contentTexts[16].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3629
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3711
                                    }, this),
                                    $$contentTexts[18].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3707
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 3469
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义-combo-的方式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义-combo-的方式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3871
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3813
                            }, this),
                            "自定义 Combo 的方式 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "warning",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3928
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义-Combo-的方式--选择合适的方式",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4349
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4218
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4144
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 3984
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 3790
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 5295
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-继承现有-combo-类型",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-继承现有-combo-类型",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5413
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 5353
                            }, this),
                            "1. 继承现有 Combo 类型 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "success",
                                children: $$contentTexts[21].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 5473
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-继承现有-Combo-类型--推荐",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5892
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5761
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5687
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 5529
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 5328
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[22].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 6838
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/base-combo.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6972
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6879
                                    }, this),
                                    $$contentTexts[24].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 6875
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/circle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7139
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7050
                                    }, this),
                                    $$contentTexts[26].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 7046
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/rect.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7304
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7217
                                    }, this),
                                    $$contentTexts[28].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 7213
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 6871
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[29].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 7386
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 7383
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[30].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[31].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7467
                                    }, this),
                                    $$contentTexts[32].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 7437
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[33].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7571
                                    }, this),
                                    $$contentTexts[35].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 7541
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[36].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7675
                                    }, this),
                                    $$contentTexts[38].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 7645
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 7433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E4%B8%89%E6%AD%A5%E5%88%9B%E5%BB%BA%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89-combo",
                                    children: $$contentTexts[40].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7788
                                }, this),
                                $$contentTexts[41].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 7759
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 7754
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "2-基于-g-图形系统从零开发",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#2-基于-g-图形系统从零开发",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8069
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 8009
                            }, this),
                            "2. 基于 G 图形系统从零开发 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                children: $$contentTexts[42].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 8129
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "2.-基于-G-图形系统从零开发--高级用法",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8535
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8404
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8330
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 8170
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 7984
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[43].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 9481
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[44].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 9517
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 9514
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[45].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9598
                                    }, this),
                                    $$contentTexts[47].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 9568
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[48].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9702
                                    }, this),
                                    $$contentTexts[50].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 9672
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[51].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9806
                                    }, this),
                                    $$contentTexts[53].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 9776
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 9564
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意事项",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[54].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/base-combo.ts",
                            children: $$contentTexts[55].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 9959
                        }, this),
                        $$contentTexts[56].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                    lineNumber: 21,
                    columnNumber: 9930
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                lineNumber: 21,
                columnNumber: 9891
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "三步创建你的第一个自定义-combo",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#三步创建你的第一个自定义-combo",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10241
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 10178
                            }, this),
                            "三步创建你的第一个自定义 Combo",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "三步创建你的第一个自定义-Combo",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10663
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10532
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10458
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 10302
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 10150
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 11638
                            }, this),
                            $$contentTexts[59].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 11609
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin:false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 11737
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 11792
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 11707
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第一步编写自定义-combo-类",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第一步编写自定义-combo-类",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11946
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 11885
                            }, this),
                            "第一步：编写自定义 Combo 类",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第一步：编写自定义-Combo-类",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12366
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12235
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12161
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 12006
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 11859
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 13312
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第二步注册自定义-combo",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第二步注册自定义-combo",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13464
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 13405
                            }, this),
                            "第二步：注册自定义 Combo",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第二步：注册自定义-Combo",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13880
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13749
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 13522
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 13381
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[62].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 14826
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第三步应用自定义-combo",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第三步应用自定义-combo",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14970
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 14911
                            }, this),
                            "第三步：应用自定义 Combo",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第三步：应用自定义-Combo",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15386
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15255
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15181
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 15028
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 14887
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[63].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 16332
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[64].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 16393
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "更进一步理解-combo-绘制的原理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#更进一步理解-combo-绘制的原理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16517
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 16454
                            }, this),
                            "更进一步：理解 Combo 绘制的原理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "更进一步：理解-Combo-绘制的原理",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16941
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16810
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16736
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 16579
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 16426
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "combo-与节点的区别",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#combo-与节点的区别",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17966
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 17909
                            }, this),
                            "Combo 与节点的区别",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Combo-与节点的区别",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18376
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18245
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18171
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 18021
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 17887
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[65].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[66].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19351
                            }, this),
                            $$contentTexts[67].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 19322
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19428
                                    }, this),
                                    $$contentTexts[69].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19424
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[70].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19506
                                    }, this),
                                    $$contentTexts[71].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19502
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[72].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19584
                                    }, this),
                                    $$contentTexts[73].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19580
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19662
                                    }, this),
                                    $$contentTexts[75].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19658
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 19420
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "原子图形",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#原子图形",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19804
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19755
                            }, this),
                            "原子图形",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "原子图形",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20198
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20067
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19993
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 19851
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 19741
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g.antv.antgroup.com/",
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 21173
                            }, this),
                            $$contentTexts[78].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/shape/overview",
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 21268
                            }, this),
                            $$contentTexts[80].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 21144
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[81].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[82].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 21402
                            }, this),
                            $$contentTexts[83].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 21373
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "元素基类",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#元素基类",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21534
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 21485
                            }, this),
                            "元素基类",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "元素基类",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21928
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21797
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21723
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 21581
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 21471
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[84].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 22874
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "属性",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#属性",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22966
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 22919
                            }, this),
                            "属性",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "属性",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23356
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23225
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23151
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 23011
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 22907
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24316
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 24309
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24449
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24484
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[90].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24519
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24445
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[91].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24563
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24598
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[93].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 24633
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24559
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 24438
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 24302
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "方法",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#方法",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24748
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 24701
                            }, this),
                            "方法",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "方法",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25138
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25007
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24933
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 24793
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 24689
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "upsertname-ctor-style-container-hooks-图形创建更新",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#upsertname-ctor-style-container-hooks-图形创建更新",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26227
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 26138
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[94].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 26266
                            }, this),
                            ": 图形创建/更新",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-图形创建/更新",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26670
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26539
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26465
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 26318
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 26084
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[95].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[96].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 27645
                            }, this),
                            $$contentTexts[97].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 27616
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 27714
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27801
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27836
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27872
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27797
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 27790
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 27932
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[103].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 27968
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[104].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[105].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28035
                                                    }, this),
                                                    $$contentTexts[106].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[107].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28102
                                                    }, this),
                                                    $$contentTexts[108].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[109].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28169
                                                    }, this),
                                                    $$contentTexts[110].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[111].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28236
                                                    }, this),
                                                    $$contentTexts[112].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[113].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28303
                                                    }, this),
                                                    $$contentTexts[114].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[115].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28370
                                                    }, this),
                                                    $$contentTexts[116].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[117].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28437
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28477
                                                    }, this),
                                                    $$contentTexts[118].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[119].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28510
                                                    }, this),
                                                    $$contentTexts[120].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[121].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28577
                                                    }, this),
                                                    $$contentTexts[122].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#%E5%85%83%E7%B4%A0%E7%BA%A6%E5%AE%9A",
                                                        children: $$contentTexts[123].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 28644
                                                    }, this),
                                                    $$contentTexts[124].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28004
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27928
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28768
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[126].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28804
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[127].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28840
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28764
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[128].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28885
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[129].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28921
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28957
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28881
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[131].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29002
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[132].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29038
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[133].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29074
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28998
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 27921
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 27783
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[134].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 29131
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[135].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 29165
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[136].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[137].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29257
                            }, this),
                            $$contentTexts[138].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[139].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29324
                            }, this),
                            $$contentTexts[140].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 29227
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29403
                                    }, this),
                                    $$contentTexts[142].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29399
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29483
                                    }, this),
                                    $$contentTexts[144].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29479
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29563
                                    }, this),
                                    $$contentTexts[146].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[147].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29634
                                    }, this),
                                    $$contentTexts[148].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[149].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29701
                                    }, this),
                                    $$contentTexts[150].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[151].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29768
                                    }, this),
                                    $$contentTexts[152].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29559
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 29395
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "renderattributes-container-渲染组合的主入口",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#renderattributes-container-渲染组合的主入口",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29970
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 29890
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 30009
                            }, this),
                            ": 渲染组合的主入口",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-渲染组合的主入口",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30416
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30285
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30211
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 30063
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 29845
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 31392
                            }, this),
                            $$contentTexts[156].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 31362
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[157].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 31463
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31587
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31623
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31547
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 31540
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[161].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31683
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[162].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31719
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31755
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31679
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[164].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31800
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[165].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31836
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 31872
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31796
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 31672
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 31533
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "getshapename-获取已创建的图形",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#getshapename-获取已创建的图形",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 31960
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 32065
                            }, this),
                            ": 获取已创建的图形",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-获取已创建的图形",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32472
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32267
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 32119
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 31929
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[168].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[169].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 33448
                            }, this),
                            $$contentTexts[170].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[171].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 33515
                            }, this),
                            $$contentTexts[172].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 33418
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[173].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 33589
                            }, this),
                            $$contentTexts[174].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 33586
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "元素约定",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#元素约定",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33727
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 33678
                            }, this),
                            "元素约定",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "元素约定",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 34121
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33990
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33916
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 33774
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 33664
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[175].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35075
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 35071
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 35067
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[176].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 35129
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[177].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35201
                                        }, this),
                                        $$contentTexts[179].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35171
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35167
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[180].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35311
                                        }, this),
                                        $$contentTexts[182].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35281
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35277
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[183].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35421
                                        }, this),
                                        $$contentTexts[185].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35391
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35387
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: [
                                            $$contentTexts[186].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[187].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 35539
                                            }, this),
                                            $$contentTexts[188].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[189].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 35606
                                            }, this),
                                            $$contentTexts[190].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35504
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35501
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35497
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 35163
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[191].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35699
                            }, this),
                            $$contentTexts[192].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[193].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 35766
                            }, this),
                            $$contentTexts[194].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 35696
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[195].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[196].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35879
                                }, this),
                                $$contentTexts[197].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E6%96%B9%E6%B3%95",
                                    children: $$contentTexts[198].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35946
                                }, this),
                                $$contentTexts[199].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 35849
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 35837
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[200].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[201].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36098
                                    }, this),
                                    $$contentTexts[202].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 36063
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                            lineNumber: 21,
                            columnNumber: 36059
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 36055
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "生命周期钩子",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#生命周期钩子",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36251
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 36200
                            }, this),
                            "生命周期钩子",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "生命周期钩子",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36649
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36518
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36444
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 36300
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 36184
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[203].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 37595
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37719
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37643
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 37636
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[207].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37783
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37779
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[208].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37828
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[209].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37864
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37775
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[210].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37913
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37909
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[211].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37958
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[212].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37994
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37905
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[213].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38043
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38039
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[214].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38088
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[215].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38124
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38035
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 37768
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 37629
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "状态响应",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#状态响应",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38244
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 38195
                            }, this),
                            "状态响应",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "状态响应",
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
                                            fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38638
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38433
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 38291
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 38181
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[216].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[217].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 39614
                            }, this),
                            $$contentTexts[218].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[219].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 39685
                            }, this),
                            $$contentTexts[220].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39584
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[221].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39760
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[222].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39794
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[223].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39856
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[224].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39890
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[225].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[226].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 39982
                            }, this),
                            $$contentTexts[227].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[228].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                                lineNumber: 21,
                                columnNumber: 40049
                            }, this),
                            $$contentTexts[229].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 39952
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[230].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 40120
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[231].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.zh.md",
                        lineNumber: 21,
                        columnNumber: 40154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                lineNumber: 21,
                columnNumber: 10124
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
                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/combo/custom-combo.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/combo/custom-combo.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/combo/custom-combo.zh.md",
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
//# sourceMappingURL=docs_manual_element_combo_custom-combo_zh_md-async.js.map